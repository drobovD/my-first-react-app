import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        let Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Component />}
            exact={route.exact}
          />
        );
      })}
      <Route path="/*" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        let Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Component />}
            exact={route.exact}
          />
        );
      })}
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
