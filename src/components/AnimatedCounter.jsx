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
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {inView && (
                                <CountUp
                                    end={item.value}
                                    duration={2}
                                    suffix={item.suffix}
                                />
                            )}
                        </div>
                        <div className="text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
