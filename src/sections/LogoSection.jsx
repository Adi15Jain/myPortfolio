import TitleHeader from "../components/TitleHeader";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <TitleHeader
                title={"Frequently Used Tools"}
                sub={"📌 Deliverables and"}
            />

            <div className="marquee h-52 mt-20">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`original-${icon.name}-${index}`}
                            icon={icon}
                        />
                    ))}
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`duplicate-${icon.name}-${index}`}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
