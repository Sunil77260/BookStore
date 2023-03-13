import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/Header/MainNavigation";

function Layout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
