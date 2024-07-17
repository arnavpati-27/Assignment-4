
import { useState } from "react";
import { Navbar, Footer, MainSection, About, Contacts, Services } from "./components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><MainSection/><Footer/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contacts/><Footer/></>
    },
    {
      path: "/services",
      element: <><Navbar/><Services/><Footer/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App