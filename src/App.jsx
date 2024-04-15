import AccountSettings from "./pages/AccountSettings";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    {
      path: "/signin",
      element: <Signin></Signin>,
    },
    {
      path: "/account-settings",
      element: <AccountSettings></AccountSettings>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
