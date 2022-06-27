import React from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/app/Spinner";
import Navbar from "./components/github-username/Navbar";
const Users = React.lazy(() => import("./components/github-username/Users"));
const Profile = React.lazy(
  () => import("./components/github-username/pages/Profile")
);

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<Profile />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
