import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/">Visit my blog (In Progress)</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a
                            className="icon"
                            href={img.url}
                            target="_blank"
                            key={img.url}
                        >
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} | Made with ❤️ by
                        {" Adi Jain "}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
