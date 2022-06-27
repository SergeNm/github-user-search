import React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { searchUsers } from "../../../redux/thunks/users.thunk";

const Filter = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.search.history);
  return (
    <div>
      {history.map((item) => (
        <button
          onClick={() => dispatch(searchUsers({ query: item }))}
          value={item}
          className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
        >
          {item}
        </button>
      ))}
    </div>

    // <div className="p-3">
    //   <select
    //     id="large"
    //     className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //     onChange={handleChange}
    //   >
    //     <option value={undefined} selected>
    //       History
    //     </option>
    //     {history?.map((el, i) => (
    //       <option key={i} value={el}>
    //         {el}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default Filter;
