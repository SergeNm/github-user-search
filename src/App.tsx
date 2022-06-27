import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/app/Spinner";
const Users = React.lazy(() => import("./components/github-username/Users"));
const Profile = React.lazy(
  () => import("./components/github-username/pages/Profile")
);

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<Profile />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
