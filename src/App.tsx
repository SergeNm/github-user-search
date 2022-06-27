import React from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import Navbar from "./components//Navbar";
const Users = React.lazy(() => import("./pages/Users"));
const Profile = React.lazy(
  () => import("./pages/Profile")
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
