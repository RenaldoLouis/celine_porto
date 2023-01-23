import React from "react";
import FlowerBlueIconSmall from '../../assets/images/flowerBlueIconSmall.png'


const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="copyright" />

            <div className="row">
                <div className="col-7">
                    Jakarta, Indonesia
                </div>

                <div className="col-2">
                    <img src={FlowerBlueIconSmall} alt="flowerIcon" ></img>
                </div>

                <div className="col-3">
                    GMT+8
                </div>
            </div>
        </nav>
    )

}

export default Navbar;