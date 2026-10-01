import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Allproduct from "../components/Allproduct"
import Men from "../components/Men";
import Women from "../components/Women";
import Cart from "../components/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "all",
                element: <Allproduct />,
            },
            {
                path: "men",
                element: <Men />
            },
            {
                path: "women",
                element: <Women />
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "*",
                element: <h1>404-Page Not Found</h1>
            }
        ]
    }
])

export default router;