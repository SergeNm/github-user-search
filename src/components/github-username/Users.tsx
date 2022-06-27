import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Search from "./Search";
import SingleUser from "./components/SingleUser";
import { fetchAllUsers } from "../../redux/thunks/users.thunk";
import Spinner from "../app/Spinner";
import classNames from "../../utils/classNames";
import HomeButton from "../app/HomeButton";
import Navbar from "./Navbar";
import { User } from "../../models/models";
import Filter from "./components/Filter";
import { setShowHistory } from "../../redux/slices/search.slice";

const Users = () => {
  const { themeName } = useAppSelector((state) => state.theme.theme);
  const { users, isLoading } = useAppSelector((state) => state.users);
  const { isShowHistory } = useAppSelector((state) => state.search);
  const {
    results,
    isLoading: searchLoading,
    isSuccess,
  } = useAppSelector((state) => state.search);

  let { items } = results;
  items = isSuccess ? items : users;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div
      className={
        "py-2 h-full " +
        classNames(
          themeName === "dark" ? "text-gray-200 bg-gray-700" : "text-gray-700"
        )
      }
    >
      <HomeButton />
      {/* <Header themeName={themeName} /> */}
      <div className="p-4 flex flex-col justify-center items-center ">
        <div className="p-4 flex justify-center items-center">
          <Search />{" "}
          <button
            onClick={() => dispatch(setShowHistory(!isShowHistory))}
            className="ml-4"
          >
            history
          </button>
        </div>
        {isShowHistory && <Filter />}
      </div>
      {searchLoading && <Spinner />}
      <div className="p-8 pt-2 md:flex flex-wrap justify-around">
        {isLoading && <Spinner />}

        {
          items.map(({ avatar_url, type, login }: User, i) => {
            return (
              <SingleUser
                avatar_url={avatar_url}
                login={login}
                type={type}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Users;
