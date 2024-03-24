import { createBrowserRouter } from "react-router-dom";
import Tickets from "../Tickets";
import Login from "../Login";
import Register from "../Register";
import Logout from "../Logout";
import InputTicket from "../InputTicket";
import UpdateTicket from "../UpdateTicket";

const router = createBrowserRouter([
  { path: "/", element: <Tickets /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/logout", element: <Logout /> },
  { path: "/newTicket", element: <InputTicket /> },
  { path: "/ticket/:id", element: <UpdateTicket /> },
]);

export default router;
