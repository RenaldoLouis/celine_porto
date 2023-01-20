import React from "react";
import { FiArrowDown } from "react-icons/fi";
import PersonalWorksTitle from '../../assets/images/personalWorks.png';


export const PersonalWorks = () => {

    return (
        <div className="container">

            <div class="containerTwoLine">
                <div class="boxTwoLine">
                    <img src={PersonalWorksTitle} />
                </div>
            </div>

            <div className="personalWorks-contentContainer">
                <div class="row">
                    <div class="col titleSectionColor">
                        Case Study
                        <div className='personalWorks-subTitle'>
                            Editorial App
                        </div>
                    </div>
                    <div class="col titleSectionColor">
                        2022
                        <div className="textColorBlack">
                            Editorial App
                        </div>
                    </div>
                    <div class="col titleSectionColor">
                        Scope
                        <div className="textColorBlack">
                            Research
                        </div>
                        <div className="textColorBlack">
                            UI/UX Design
                        </div>
                    </div>
                    <button class="col titleSectionColor button-nude personalWorks-showMoreButton">
                        Show More
                        <FiArrowDown />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PersonalWorks;