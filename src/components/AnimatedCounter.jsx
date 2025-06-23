import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // count only once when in view
        threshold: 0.3, // trigger when 30% of the component is visible
    });

    return (
        <div id="counter" ref={ref} className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number animate-gradient-text text-6xl text-center font-bold mb-2">
                            {inView && (
                                <CountUp
                                    end={item.value}
                                    duration={3}
                                    suffix={item.suffix}
                                />
                            )}
                        </div>
                        <div className="animate-gradient-text text-xl text-center">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
