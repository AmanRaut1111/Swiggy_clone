import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";

import RestaurantMenu from "./components/RestaurantMenu";

import Contact from "./components/Contact";

const About = lazy(() => import("../src/components/About.js"));

const Applayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
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
                path: "/restaurant/:resId",

                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
