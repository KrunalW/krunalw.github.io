import React from 'react';


const Menu = () => {
    return (
        <div className="main-header" id="home">
            <div className="container-fluid">
                <div className="float-left">
                    <div className="logo">
                        <a href="javascript.void(0)">
                            {/* <h1 className='logoTitle'>Krunal</h1> */}
                            {/* <img alt='Logo' src={require('../img/logo.svg')} /> */}
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="175.000000pt" height="79.000000pt" viewBox="0 0 175.000000 79.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,79.000000) scale(0.100000,-0.100000)"
fill="#f96f84" stroke="#FFFFFF" stroke-width="20" class="path" stroke-miterlimit="1">
<path d="M20 400 l0 -390 70 0 70 0 0 390 0 390 -70 0 -70 0 0 -390z"/>
<path d="M475 630 l-160 -160 -47 0 -48 0 0 -70 0 -70 48 0 47 0 160 -160 160
-160 100 0 100 1 -200 196 -199 197 199 193 200 192 -100 1 -100 0 -160 -160z"/>
<path d="M1550 548 c-24 -134 -47 -247 -51 -251 -4 -5 -58 73 -120 173 -118
190 -139 212 -185 191 -26 -11 -87 -98 -131 -186 -17 -33 -76 -132 -132 -219
-108 -169 -118 -199 -79 -236 27 -25 59 -26 86 -3 11 10 77 112 147 228 70
116 128 211 130 213 1 2 64 -98 140 -223 144 -238 157 -251 211 -226 13 6 29
21 34 33 5 13 37 178 70 368 34 190 63 353 66 363 5 15 -3 17 -69 17 l-74 0
-43 -242z"/>
</g>
</svg>
                        </a>
                    </div>
                </div>
                <div className="float-right affix-example">
                    <div className="menu">
                        <ul className="scroll-nav">
                            <li className="current"><a href="#home">Home</a></li>
                            <li className=""><a href="#about">About Me</a></li>
                            <li className=""><a href="#portfolio">Portfolio</a></li>
                            <li className=""><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;