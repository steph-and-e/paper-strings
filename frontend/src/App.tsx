import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Educators from "./pages/Educators";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "/educators", element: <Educators /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
