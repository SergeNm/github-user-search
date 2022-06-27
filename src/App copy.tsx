import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/app/Spinner";
import CountryDetails from "./components/countries/CountryDetails";
import Profile from "./components/github-username/pages/Profile";
const Todo = React.lazy(() => import("./components/todo/TodoApp"));
const Calculator = React.lazy(
  () => import("./components/calculator/Calculator")
);
const Countries = React.lazy(() => import("./components/countries/Countries"));
const Users = React.lazy(() => import("./components/github-username/Users"));
const Portfolio = React.lazy(
  () => import("./components/landing-page/Portfolio")
);

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/details" element={<CountryDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<Profile />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
