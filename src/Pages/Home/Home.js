import React from "react";
import FloatingGlassButton from "../../components/atom/FloatingGlassButton";
import Navbar from "../../components/atom/Navbar";
import Header from "./Header";
import PersonalWorks from "./PersonalWorks";
import WhatIDo from "./WhatIDo";
import WhatIDoContent from "./WhatIDoContent";

const Home = () => {
    return (
        <div className="backgroundColor">
            <Navbar />
            <FloatingGlassButton />
            <Header />
            <div style={{background: "#E7E7E7", paddingTop: "5vw", paddingBottom: "5vw", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
                <WhatIDo />
                <WhatIDoContent />
                <PersonalWorks />
            </div>


            <div className="footer">
                <p style={{color: "black"}}>Footer</p>
            </div>
        </div>
    )
}

export default Home;