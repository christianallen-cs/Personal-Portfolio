import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <FaAngleDoubleUp
                className={`top-btn-position top-btn-style ${showScrollTopButton ? 'show-btn' : ''}`}
                onClick={scrollTop}
            />
        </div>
    );
};

export default ScrollToTop;