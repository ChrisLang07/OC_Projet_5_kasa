import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
        <div className="container">
            <Navbar />
            <Outlet />
        </div>

        <Footer />
    </>
);
};

export default Layout;
