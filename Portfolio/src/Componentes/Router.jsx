import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error"
import Skills from "./Skills";
import Project from "./Project";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <div className="app">
                    <Header />

                    <main className="main">
                        <Home />
                    </main>

                    <Footer />
                </div>
        },
        {
            path:"/about",
            element:
            <div className="app">
                <Header />

                <main className="main">
                    <About/>
                </main>

                <Footer />
            </div>
        },

        {
            path:"/skills",
            element:
            <div className="app">
                <Header />

                <main className="main">
                    <Skills/>
                </main>

                <Footer />
            </div>

        },

        {
            path:"/project",
            element:
            <div className="app">
                <Header />

                <main className="main">
                    <Project/>
                </main>

                <Footer />
            </div>

        },



        {
            path:"*",
            element:<Error/>
        }
    ]
)

export default router;