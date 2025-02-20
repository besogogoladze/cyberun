import { Outlet, useLocation } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import SideNavigation from "./Components/SideNavigation/SideNavigation";

function App() {
  const location = useLocation();

  const hideSidebarRoutes = ["/blog"];
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        {!hideSidebarRoutes.includes(location.pathname) && <SideNavigation />}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
