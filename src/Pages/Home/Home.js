import React from "react";
import FloatingGlassButton from "../../components/atom/FloatingGlassButton";
import Navbar from "../../components/atom/Navbar";
import Header from "./Header";
import PersonalWorks from "./PersonalWorks";
import homeCard from "../../assets/images/spiderman.jpg"
import WhatIDo from "./WhatIDo";

const Home = () => {
    return (
        <div className="backgroundColor">
            <Navbar />
            <FloatingGlassButton />
            <Header />
            <WhatIDo />
            <PersonalWorks />

            <img className="home-coverImage" src={homeCard} alt="Italian Trulli" />
            <div className='contentContainer'>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            1 of 2
                        </div>
                        <div class="col">
                            2 of 2
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start">
                            One of three columns
                        </div>
                        <div class="col align-self-center">
                            One of three columns
                        </div>
                        <div class="col align-self-end">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default Home;