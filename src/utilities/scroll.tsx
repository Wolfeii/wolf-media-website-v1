import React, { useState, useEffect } from 'react';

export function useScrollDirection() {
    const [ scrollDirection, setScrollDirection] = useState("");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
                setTimeout(() => {
                    setScrollDirection(direction); 
                }, 400);
            }

            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        }
    }, [scrollDirection])

    return scrollDirection;
};