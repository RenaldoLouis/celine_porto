import React from "react";
import FlowerIcon from '../../assets/images/flowerIcon.png'

const Header = () => {

    return (
        <>
            <div className="homeBackground">
                <div className="headerContaier">
                    <div>
                        <div class="row">
                            <div className="col-1">
                                <p className="textLeftUp">currently open for freelance projects</p>
                                <img className="iconLeft" src={FlowerIcon} alt="flowerIcon" ></img>
                                <p className="textLeftDown">currently open for freelance projects</p>
                            </div>
                            <div class="col" >
                                <div class="containerTwoLine">
                                    <div class="boxTwoLine">
                                        Celine
                                    </div>
                                </div>
                                <div>
                                    A generalist designer that loves to explore interaction between UI, UX, and human.
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    Sometimes do motion & branding.
                                </div>
                                <div className="row" >
                                    <div className="col">
                                        works
                                    </div>
                                    <div className="col" >
                                        tes
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col">
                                        tes
                                    </div>
                                    <div className="col" >
                                        Contact
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                Picture
                            </div>
                        </div>
                        {/* <div class="row" style={{ marginTop: 15 }}>
                            <div class="col" />
                            <div class="col-7">
                                <div class="row">
                                    <div class="col">
                                        A designer specializing in user-centric digital products,
                                    </div>
                                    <div class="col">
                                        with a focus on aesthetics and problem-solving.
                                    </div>
                                    <div class="col">
                                        Believes in accessible and inclusive design for all users.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;