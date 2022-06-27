import React, { useEffect } from "react";

import Navbar from "../Navbar";
import { UserDetail } from "../../../models/models";
import SingleRipo from "./SingleRipo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useParams } from "react-router-dom";
import { fetchUserRepos } from "../../../redux/thunks/users.thunk";
import Spinner from "../../app/Spinner";
import classNames from "../../../utils/classNames";

export default function UserDetails({
  bio,
  followers,
  login,
  name,
  avatar_url,
  public_repos,
  following,
  html_url,
  email,
}: UserDetail) {
  const dispatch = useAppDispatch();
  const { themeName } = useAppSelector((state) => state.theme.theme);
  const { username } = useParams();
  const { repos, isLoading, hasError } = useAppSelector((state) => state.repos);

  useEffect(() => {
    dispatch(fetchUserRepos({ login: username! }));
  }, [dispatch, username]);
  return (
    <>
    
      <main>
        <section className="relative block" style={{ height: "250px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${avatar_url}')`,
            }}
          >
            <span className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
        </section>
        <section
          className={
            "relative py-16 " +
            classNames(themeName === "dark" ? "bg-gray-600 text-gray-200" : "bg-gray-300 text-gray-700")
          }
        >
          <div className="container mx-auto px-4">
            <div
              className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-40 " +
                classNames(themeName === "dark" ? "bg-gray-700" : "bg-gray-100")
              }
            >
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={avatar_url}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <a
                        href={html_url}
                        className="bg-pink-500 active:bg-pink-600 uppercase text-gray-100 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          {public_repos}
                        </span>
                        <span className="text-sm ">
                          Public Repos
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          {followers}
                        </span>
                        <span className="text-sm">Followers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-4xl font-semibold leading-normal mb-2  ">
                    {login}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
                    {name}
                  </div>
                  <div className="mb-2  mt-4">{bio}</div>
                </div>
                <div className="mt-6 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap gap-6 justify-center">
                    {isLoading && <Spinner />}
                    {hasError && <div>Network Error</div>}
                    {!isLoading &&
                      !hasError &&
                      repos.map(
                        ({
                          name,
                          description,
                          forks,
                          html_url,
                          language,
                          stargazers_count,
                        }) => (
                          <SingleRipo
                            name={name}
                            description={description}
                            forks={forks}
                            html_url={html_url}
                            language={language}
                            stargazers_count={stargazers_count}
                          />
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
