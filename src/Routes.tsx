import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { DefaultLayout } from "./Layouts/DefaultLayout"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/completeOrder",
        element: <CompleteOrderPage />,
      },
      {
        path: "/orderConfirmed",
        element: <OrderConfirmedPage />,
      },
    ],
  },
])
