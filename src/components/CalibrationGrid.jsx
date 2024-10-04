import React, { useState } from 'react';
import WebgazerComponent from './WebgazerComponent'; // Adjust the path as needed

const CalibrationGrid = () => {
    // Initialize dots' states: false means not yet gazed for 3 seconds
    const [dots, setDots] = useState({
        dot1: false,
        dot2: false,
        dot3: false,
        dot4: false,
        dot5: false
    });

    // Function to handle gaze detection on each dot
    const handleGaze = (dot) => {
        // Check which dot was gazed at
        setDots(prevDots => ({
            ...prevDots,
            [dot]: true // Set the gazed dot to true
        }));

        // Optional: You could add a timeout to reset the state after some time
        setTimeout(() => {
            setDots(prevDots => ({
                ...prevDots,
                [dot]: false // Reset the dot after a period
            }));
        }, 3000); // Resets after 3 seconds (adjust as needed)
    };

    return (
        <div className="relative w-screen h-screen">
            <WebgazerComponent />
            <div className="grid grid-cols-3 grid-rows-3 h-full w-full items-center justify-center">
                {/* Top-center dot */}
                <div></div>
                <div className="flex justify-center items-center">
                    <div 
                        className={`w-12 h-12 rounded-full ${dots.dot1 ? 'bg-green-500' : 'bg-red-500'}`} 
                        onMouseEnter={() => handleGaze('dot1')}
                    ></div>
                </div>
                <div></div>

                {/* Middle-left dot */}
                <div className="flex justify-center items-center">
                    <div 
                        className={`w-12 h-12 rounded-full ${dots.dot2 ? 'bg-green-500' : 'bg-red-500'}`} 
                        onMouseEnter={() => handleGaze('dot2')}
                    ></div>
                </div>

                {/* Center dot */}
                <div className="flex justify-center items-center">
                    <div 
                        className={`w-12 h-12 rounded-full ${dots.dot3 ? 'bg-green-500' : 'bg-red-500'}`} 
                        onMouseEnter={() => handleGaze('dot3')}
                    ></div>
                </div>

                {/* Middle-right dot */}
                <div className="flex justify-center items-center">
                    <div 
                        className={`w-12 h-12 rounded-full ${dots.dot4 ? 'bg-green-500' : 'bg-red-500'}`} 
                        onMouseEnter={() => handleGaze('dot4')}
                    ></div>
                </div>

                <div></div>

                {/* Bottom-center dot */}
                <div className="flex justify-center items-center">
                    <div 
                        className={`w-12 h-12 rounded-full ${dots.dot5 ? 'bg-green-500' : 'bg-red-500'}`} 
                        onMouseEnter={() => handleGaze('dot5')}
                    ></div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default CalibrationGrid;
