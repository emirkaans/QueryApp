import Home from "../pages/Home/Home";
import UserList from "../pages/UserList/UserList";
import QueryBuilder from "../pages/QueryBuilder/QueryBuilder";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },
  {
    path: "/querybuilder",
    element: <QueryBuilder />,
  },
];

export default routes;
