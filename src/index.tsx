import ReactDOM from "react-dom/client";
import "./index.css";
import "@ant-design/v5-patch-for-react-19";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
