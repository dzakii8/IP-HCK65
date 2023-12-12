import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/homePages";

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage/>
  }
])

export default router