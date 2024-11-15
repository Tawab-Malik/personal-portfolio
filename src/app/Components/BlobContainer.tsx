"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";

export default function MovingBlobCard({ children}:any) {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const { width, height } = useWindowSize(); // Get viewport size to set boundaries

    // Animation function to make the blob move randomly and bounce within the container
    const startMovingBlob = () => {
        controls.start({
            x: [
                Math.random() * 100 - 50, // random start x
                Math.random() * (width / 2 - 50), // random x movement within half container width
                Math.random() * -50, // random negative x movement
                Math.random() * (width / 2 - 50), // random x movement back to positive
            ],
            y: [
                Math.random() * 50 - 25, // random start y
                Math.random() * (height / 4 - 25), // random y movement within a quarter container height
                Math.random() * -25, // random negative y movement
                Math.random() * (height / 4 - 25), // random y movement back to positive
            ],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 6,
                ease: "easeInOut",
            },
        });
    };

    useEffect(() => {
        startMovingBlob();
    }, [width, height]);

    return (

        <div
            ref={containerRef}
            className="relative w-full h-auto p-6 bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        >
            {/* Moving Yellow Blob */}
            <motion.div
                animate={controls}
                className="absolute w-24 h-24 bg-new-yellow-500 rounded-full opacity-70"
                style={{ zIndex: -1 }}
            />
            {children}
            {/* Card Content */}
            {/*<div className="relative z-10 text-center">*/}
            {/*    <div className="flex justify-between items-center mb-4">*/}
            {/*        <span className="flex items-center space-x-2 text-gray-600 font-medium">*/}
            {/*            <span>📅</span>*/}
            {/*            <span>2017 - 2020</span>*/}
            {/*        </span>*/}
            {/*        <span className="flex items-center space-x-2 text-gray-600 font-medium">*/}
            {/*            <span>🎓</span>*/}
            {/*            <span>Graduation</span>*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*    <h2 className="text-xl font-bold mb-2">Bachelor of Computer Applications</h2>*/}
            {/*    <div className="flex flex-col items-center text-gray-600 mt-2 space-y-2">*/}
            {/*        <div className="flex items-center space-x-2">*/}
            {/*            <span>🏛️</span>*/}
            {/*            <span>Veer Narmad South Gujarat University</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center space-x-2">*/}
            {/*            <span>📍</span>*/}
            {/*            <span>Surat, Gujarat, India</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
