import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import Home from "./pages/Home/Home"
import StockItems from "./pages/StockItems/StocksItem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "/items",
                element: <StockItems />
            }
        ]
    }
])

export default router;