import React from "react";
import Banner from "./Banner";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Development from "./development";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            {/* <Development /> */}
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
