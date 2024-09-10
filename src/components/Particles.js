import Particles, {initParticlesEngine} from "@tsparticles/react";
import {useEffect, useMemo, useState} from "react";
import {loadSlim} from "@tsparticles/slim";

const ParticlesComponent = (props) => {

    const [, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: false,
                        mode: 'grab',
                    },
                },
                modes: {
                    bubble: {
                        distance: 200,
                        duration: 2,
                        opacity: 0,
                        size: 0,
                        speed: 3
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: true,
                    speed: 0.3
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 600
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 5
                    },
                    value: { min: 0.3, max: 0.6 }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 1
                },
            },
        }),
        []
    );


    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;