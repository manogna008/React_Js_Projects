import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUS from "./components/ContactUs";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Manogna Bade",
    };
    setUserName(data.name);
  }, []);
  return (
    //default user
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Manogna Bade */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Sri Hansika" }}>
          {/* Sri Hansika*/}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
