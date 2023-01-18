import React from "react";
import FloatingGlassButton from "../../components/atom/FloatingGlassButton";
import Navbar from "../../components/atom/Navbar";
import Content from "./Content";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}

            <FloatingGlassButton />
            <Content />
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default Home;