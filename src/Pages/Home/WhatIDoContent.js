import React from "react";

export const WhatIDoContent = () => {

    return (
        <div>
            <div className="rowCenter" style={{ color: "white", fontSize: 64, fontWeight: 300 }}>
                What I Do
            </div>
            <div className="container px-4" style={{ marginBottom: 55 }}>
                <div className="row" style={{ height: 414 }}>
                    <div className="col">

                        <div style={{ padding: 58, color: "white", borderRadius: "32px", backgroundColor: "#3379FF", height: "100%", width: "100%" }}>
                            <div style={{ width: 25, height: 25, background: "black" }} />
                            <div className="titleContentText">
                                Product
                            </div>
                            <div className="titleContentText">
                                Design
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ padding: 58, color: "white", borderRadius: "32px", backgroundColor: "#FF7D33", height: "100%", width: "100%", position: "relative" }}>
                            <div className="ContentText">
                                Do not hesitate to contact,
                            </div>
                            <div className="ContentText">
                                You are always welcomed!
                            </div>
                            <div style={{ position: "absolute", bottom: "10%" }}>
                                <div style={{ width: 25, height: 25, background: "black" }} />
                                <div className="titleContentText">
                                    Graphic
                                </div>
                                <div className="titleContentText">
                                    Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDoContent;
