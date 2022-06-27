import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operation } from "../../models/models";

export interface State {
  previousValue: number;
  operation?: Operation;
  showValue: Array<number>;
  fractionValue: Array<number>;
  value: number;
  sign?: string;
  isFraction?: boolean;
}

const calc = (a: number, b: number, op: string) =>
  op === "+"
    ? a + b
    : op === "-"
    ? a - b
    : op === "*"
    ? a * b
    : op === "/"
    ? a / b
    : b;

const slice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
    showValue: [],
    fractionValue: [],
    previousValue: 0,
    sign: "",
  } as State,
  reducers: {
    setValue(state: State, action: PayloadAction<number>) {
      if (state.operation?.operator) {
        state.showValue = [];
        state.operation.operator = undefined;
      }
      !state.isFraction
        ? (state.showValue = [...state.showValue, action.payload])
        : (state.fractionValue = [...state.fractionValue, action.payload]);
    },
    operate(state: State, action: PayloadAction<Operation>) {
      const operation = action.payload;
      if (state.showValue.join("")) {
        state.value = parseFloat(state.showValue.join("")+"." +state.fractionValue.join(""));
      }
      switch (operation.operator) {
        case "-":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue - state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.isFraction = false;
          state.sign = action.payload.operator;
          break;

        case "+":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue + state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.isFraction = false;
          state.fractionValue =[];
          state.sign = action.payload.operator;
          break;

        case "*":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue * state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.fractionValue =[];
          state.isFraction = false;
          state.sign = action.payload.operator;
          break;

        case "/":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue / state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.fractionValue =[];
          state.isFraction = false;
          state.sign = action.payload.operator;
          break;

        case "=":
          state.showValue = [
            calc(state.previousValue, state.value, state.sign!),
          ];
          state.previousValue = 0;
          state.value = 0;
          state.isFraction = false;
          state.fractionValue =[];
          state.sign = "";
          break;

        case "reset":
          state.value = 0;
          state.previousValue = 0;
          state.showValue = [];
          state.fractionValue=[];
          state.isFraction = false;
          break;

        case "del":
          state.showValue.length && state.showValue.splice(-1);
          break;

        case ".":
          state.isFraction = true;
          break;
      }
    },
  },
});

export const reducer = slice.reducer;
export const { setValue, operate } = slice.actions;
