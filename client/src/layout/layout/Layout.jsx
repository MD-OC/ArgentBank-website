import { Outlet } from "react-router-dom"

import MainNav from "../main-nav/MainNav"
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <>
            <MainNav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout
