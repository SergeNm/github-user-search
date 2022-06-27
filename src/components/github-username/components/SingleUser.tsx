import React from "react";
import { User } from "../../../models/models";
import { BiLinkExternal } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import classNames from "../../../utils/classNames";

const SingleUser = ({ avatar_url, login, type }: User) => {
  const {themeName} = useAppSelector((state) => state.theme.theme);
  return (
    <div className="py-4">
      <div className={"w-72 p-4 rounded-lg border shadow-md "+ classNames(themeName === 'dark'? "bg-gray-600 text-gray-200 border-gray-800" : "bg-white text-gray-900 border-gray-200")}>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={avatar_url}
            alt="user"
          />
          <h5 className="mb-1 text-xl font-medium ">
            {login}
          </h5>
          <span className="text-sm ">
            {type}
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link to={`/users/${login}`}>
            <button
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdPreview />
              View
            </button>
            </Link>
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              <BiLinkExternal />
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
