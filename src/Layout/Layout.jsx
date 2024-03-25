import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBAr";


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  );
};

export default Layout;