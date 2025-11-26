import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import Home from "./pages/Home/Home"
import StockItems from "./pages/StockItems/StocksItem";
import NewItem from "./pages/NewItem/NewItem"
import ViewItem from "./pages/ViewItem/ViewItem";
import GetItemDetail from "./loader/GetItemDetail"


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
            },
            {
                path: "/items/:itemId",
                element: <ViewItem />,
                loader: GetItemDetail
            },
            {
                path: "/newItem",
                element: <NewItem />
            }
        ]
    }
])

export default router;