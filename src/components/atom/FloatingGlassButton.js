import React from "react";
import angLogo from '../../assets/images/ANG-Logo.png';


const FloatingGlassButton = () => {

    return (
        <div className={`${'button-floating'} ${'button-glass'}`} >
            <div class="container text-center">
                <div class="row">
                    <button className={`${'col'} ${'button-nude'}`}>
                        About
                    </button>
                    <button className={`${'col'} ${'button-nude'}`}>
                        Works
                    </button>
                    <button className={`${'col'} ${'button-nude'}`}>
                        Contact
                    </button>
                </div>
            </div>
        </div >

    )

}

export default FloatingGlassButton;