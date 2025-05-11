import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
        ];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom -=100",
                    },
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img
                                src="/images/project1.png"
                                alt="space-seahorse"
                            />
                        </div>
                        <div className="text-content">
                            <h1>
                                Space-Seahorse: A Retro Arcade Game in
                                JavaScript
                            </h1>
                            <p className="text-white-50 md:text-xl">
                                Space-Seahorse is a pixel-art arcade-style
                                browser game where you pilot a cosmic seahorse
                                through asteroid fields and alien threats. Built
                                from scratch using vanilla JavaScript and
                                sprite-based animation, it combines nostalgic
                                visuals with fast-paced action.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="brawler" />
                            </div>
                            <h2>Brawler: Warrior V/S Wizard</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="/images/project3.png"
                                    alt="image-particle"
                                />
                            </div>
                            <h2>Image Particle Effect: An Intro to Three.JS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
