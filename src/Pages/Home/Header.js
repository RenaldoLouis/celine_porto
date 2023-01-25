import React from "react";
import FlowerIcon from '../../assets/images/flowerIcon.png'
import ComingSoonHeader from '../../assets/images/comingSoonHeader.png'
import CelineTitle from '../../assets/images/celineTitle.png'
import FlowerBlueIconSmall from '../../assets/images/flowerBlueIconSmall.png'

const Header = () => {

    return (
        <>
            <div className="homeBackground">
                <div className="headerContaier">
                    <div class="row">

                        <div className="col-1">
                            <p className="textLeftUp">currently open for freelance projects</p>
                            <img className="iconLeft" src={FlowerIcon} alt="flowerIcon" ></img>
                            <p className="textLeftDown">currently open for freelance projects</p>
                        </div>

                        <div class="col" >
                            <div class="containerTwoLine">
                                <div class="boxTwoLine">
                                    <img src={CelineTitle} style={{ width: '25rem' }} alt="CelineIcon" ></img>
                                </div>
                            </div>

                            <div>
                                A generalist designer that loves to explore interaction between UI, UX, and human.
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                Sometimes do motion & branding.
                            </div>

                            <div className="row" >
                                <div className="col headerText headerText-selected">
                                    works
                                </div>
                                <div className="col" />
                            </div>
                            <hr />

                            <div className="row" >
                                <div className="col" />
                                <div className="col headerText">
                                    Contact
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div class="col imageHeaderContainer" >
                            <img style={{ width: '100%' }} src={ComingSoonHeader} alt="ComingSoon" ></img>
                        </div>
                        {/* <div className="circle" >
                            <img src={FlowerBlueIconSmall} alt="flowerIcon" ></img>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;