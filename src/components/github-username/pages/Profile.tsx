import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchUser } from "../../../redux/thunks/users.thunk";
import UserDetails from "../components/UserDetails";
import { useParams } from "react-router-dom";
import Spinner from "../../app/Spinner";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUser({ login: username! }));
  }, [dispatch, username]);

  const { user, isLoading, hasError } = useAppSelector((state) => state.user);

  const {
    avatar_url,
    bio,
    followers,
    following,
    html_url,
    name,
    public_repos,
    blog,
    company,
    email,
    hireable,
    login,
  } = user;

  return (
    <div>
      {isLoading && <Spinner />}
      {hasError && (
        <div className="w-full h-screen flex justify-center items-center">
          Network Error
        </div>
      )}
      {!isLoading && !hasError && (
        <UserDetails
          login={login}
          avatar_url={avatar_url}
          bio={bio}
          followers={followers}
          html_url={html_url}
          following={following}
          name={name}
          public_repos={public_repos}
          email={email}
          blog={blog}
          company={company}
          hireable={hireable}
          key={login}
        />
      )}
    </div>
  );
};

export default Profile;
