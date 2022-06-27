import React from "react";
import { Repo } from "../../../models/models";
import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di";
import { useAppSelector } from "../../../redux/hooks";
import classNames from "../../../utils/classNames";

const SingleRipo = ({
  name,
  description,
  forks,
  html_url,
  language,
  stargazers_count,
}: Repo) => {
  const { themeName } = useAppSelector((state) => state.theme.theme);
  return (
    <div className={"p-4 w-64 rounded-lg border shadow-md "+ classNames(themeName === 'dark'? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800" )}>
      <h5 className="mb-3 text-base font-semibold lg:text-lg">
        {name && name.length > 20 ? name.slice(0, 20) : name}
      </h5>
      <p className={"text-sm font-normal   "+ classNames(themeName === 'dark'? "text-gray-300" : "text-gray-500" )}>
        {description && description.length > 60
          ? description.slice(0, 60) + "..."
          : description}
      </p>
      <ul className="my-4 space-y-3">
        <li>
          <span className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            {language === "HTML" ? (
              <DiHtml5 className="text-blue-500 text-lg" />
            ) : language === "JavaScript" ? (
              <DiJavascript1 className="text-green-500" />
            ) : language === "CSS" ? (
              <DiCss3 className="text-blue-800" />
            ) : (
              <span className="text-gray-500 text-xs">Lang:</span>
            )}
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              {language}
            </span>
            <span className="inline-flex items-center justify-center  ml-3 text-xs  text-gray-500 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-400">
              {forks} Forks
            </span>
          </span>
        </li>
      </ul>
      <div>
        <a
          href={html_url}
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          Visit this repository on github
        </a>
      </div>
    </div>
  );
};

export default SingleRipo;
