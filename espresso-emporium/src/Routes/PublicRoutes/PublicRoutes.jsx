import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../../Pages/CoffeeDetails/CoffeeDetails";
import Error from "../../Pages/Error/Error";
import UpdateCoffee from "../../Pages/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>,
      },
      {
        path: "/update-coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
