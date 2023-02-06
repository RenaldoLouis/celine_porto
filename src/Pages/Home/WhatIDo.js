import React from "react";


export const WhatIDo = () => {
    let TextScroll = [
        {
            name: "Brand Entity"
        },
        {
            name: "User InterFace"
        },
        {
            name: "User Experience Design"
        },
        {
            name: "Product Design"
        },
        {
            name: "Brand Entity"
        },
        {
            name: "User InterFace"
        },
        {
            name: "User Experience Design"
        },
        {
            name: "Product Design"
        },
    ]

    return (
        <div className="headerBorder headerMargin headerRotate headerHeight">
            <div className="rowBetween scrollingtextanimation fullHeight" style={{ width: "115vw" }}>
                {TextScroll.map((textData, i) => {
                    return (
                        <>
                            <div className="headerText">
                                {textData.name}
                            </div>
                            {
                                TextScroll.length - 1 !== i ?

                                    <div className="box" />
                                    : null
                            }
                        </>
                    )
                })}
            </div>
        </div>
        // <div></div>
    )
}

export default WhatIDo;