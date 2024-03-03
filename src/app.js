import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cart from "./components/Cart.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";

import RestaurantMenu from "./components/RestaurantMenu";

import Contact from "./components/Contact";

import { Provider } from "react-redux";

import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";

const About = lazy(() => import("../src/components/About.js"));

const Applayout = () => {

    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            name: "Aman"
        }

        setUserName(data.name)
    })


    return (


        <div className="App">
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
                <Footer />
            </Provider>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading</h1>}>
                        <About />
                    </Suspense>
                ),
            },

            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "/restaurant/:resId",

                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
