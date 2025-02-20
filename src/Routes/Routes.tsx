import { createHashRouter } from "react-router-dom";
import App from "../App";
import EditProfile from "../Pages/EditProfile";
import Blog from "../Pages/Blog";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <div>home page</div> },
      { path: "/edit-profile", element: <EditProfile /> },
      { path: "/blog", element: <Blog /> },
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);
