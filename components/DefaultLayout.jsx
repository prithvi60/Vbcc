import React from "react";
import Banner from "./Banner";
import NavBar from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Banner />
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
