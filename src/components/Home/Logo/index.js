import React, { useEffect, useRef, useState } from 'react';
import LogoS from '../../../assets/images/pic.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef(null);
    const solidLogoRef = useRef(null);
    const [showSolidLogo, setShowSolidLogo] = useState(false);

    useEffect(() => {
        // Initial animation: Opacity fade in for bgRef
        bgRef.current.style.transition = 'opacity 1s';
        setTimeout(() => {
            bgRef.current.style.opacity = '1';
            // Trigger the solidLogo animation after a delay
            setTimeout(() => {
                setShowSolidLogo(true);
            }, 2000); // Delay of 2 seconds
        }, 0);

        // Solid Logo animation
        if (showSolidLogo) {
            solidLogoRef.current.style.transition = 'stroke-dashoffset 20s ease-in-out, opacity 5s ease-in-out';
            solidLogoRef.current.style.strokeDashoffset = '0';
            solidLogoRef.current.style.opacity = '0.4';
        }
    }, [showSolidLogo]);

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className={`solid-logo ${showSolidLogo ? 'show' : ''}`}
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript, Developer"
            />
        </div>
    );
};

export default Logo;
