import React, { useEffect, useState, useRef } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ".navbar nav",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power2.inOut",
            }
        );
        gsap.fromTo(
            ".navbar .contact-btn",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.inOut",
            }
        );
        gsap.fromTo(
            ".navbar .logo",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.inOut",
            }
        );
    });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <header
            className={`navbar ${
                scrolled ? "scrolled" : "not-scrolled"
            } "navbar bg-black/50 text-white backdrop-blur-md"`}
        >
            <div className="inner">
                <a className="logo" href="#hero">
                    Adi Jain
                </a>

                <nav className="desktop" ref={navRef}>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group-btn">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
                {/* <div>
                    <ThemeToggle />
                </div> */}
            </div>
        </header>
    );
};

export default NavBar;
