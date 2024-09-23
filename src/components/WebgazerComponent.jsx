// import React, { useEffect, useRef, useState } from "react";

// /* global webgazer */ // Tell ESLint that webgazer is a global variable

// const WebgazerComponent = () => {
//   const [error, setError] = useState(null); // Track errors
//   const [calibrationComplete, setCalibrationComplete] = useState(false); // Track if calibration is done
//   const canvasRef = useRef(null); // Reference for the canvas element

//   useEffect(() => {
//     // Dynamically load the Webgazer script
//     const script = document.createElement("script");
//     script.src = "https://cdn.jsdelivr.net/npm/webgazer";
//     script.async = true;
//     document.body.appendChild(script);

//     // Script loaded successfully
//     script.onload = async () => {
//       if (window.webgazer) {
//         try {
//           const canvas = canvasRef.current;

//           // Set the canvas for Webgazer
//           window.webgazer.setVideoElementCanvas(canvas);
//           await window.webgazer.begin();

//           // Show prediction points for gaze tracking
//           window.webgazer.showPredictionPoints(true);

//           // Listen for gaze data after calibration
//           window.webgazer.setGazeListener((data, timestamp) => {
//             if (data && calibrationComplete) {
//               const { x, y } = data; // Gaze x, y coordinates
//               console.log(`Gaze coordinates: X=${x}, Y=${y} at time=${timestamp}`);
//             } else {
//               console.log("Gaze data is null, trying to capture again...");
//             }
//           });
//         } catch (err) {
//           setError("Error initializing Webgazer.");
//         }
//       } else {
//         setError("Webgazer not found.");
//       }
//     };

//     // Clean up: stop Webgazer and remove the script
//     return () => {
//       if (window.webgazer) {
//         window.webgazer.end(); // Stops Webgazer when the component is removed
//       }
//       document.body.removeChild(script); // Remove script on component unmount
//     };
//   }, [calibrationComplete]);

//   // Calibration point handler
//   const handleCalibrationClick = (e) => {
//     const { clientX: x, clientY: y } = e;
//     window.webgazer.recordScreenPosition(x, y);
//     console.log(`Calibration point recorded at X=${x}, Y=${y}`);
//   };

//   const completeCalibration = () => {
//     setCalibrationComplete(true);
//     console.log("Calibration completed.");
//   };

//   // Show error if there is one
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       {/* Calibration points */}
//       <div
//         style={{ position: "absolute", top: "50%", left: "50%", zIndex: 1000 }}
//       >
//         <button
//           onClick={handleCalibrationClick}
//           style={{
//             width: "20px",
//             height: "20px",
//             backgroundColor: "red",
//             borderRadius: "50%",
//           }}
//         />
//       </div>

//       {/* Calibration complete button */}
//       <button
//         style={{ position: "fixed", top: "10px", right: "10px" }}
//         onClick={completeCalibration}
//       >
//         Complete Calibration
//       </button>

//       {/* Canvas element that Webgazer uses */}
//       <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
//     </>
//   );
// };

// export default WebgazerComponent;



import { useEffect } from "react";

const WebgazerComponent = () => {

    const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/webgazer";
    //  script.src = "https://api.gazerecorder.com/GazeCloudAPI.js";
     script.async = true;
     document.body.appendChild(script);

    useEffect(() => {
        const webgazer = window.webgazer;
        webgazer.setGazeListener((data,timestamp)=>{
            console.log(data,timestamp);
        }).begin();
    },[]);
};

export default WebgazerComponent;



// import { useEffect } from "react";

// const WebgazerComponent = () => {
//   // Load the Webgazer script
//   const script = document.createElement("script");
//   script.src = "https://cdn.jsdelivr.net/npm/webgazer";
//   script.async = true;
//   document.body.appendChild(script);

//   useEffect(() => {
//     // Center coordinates of the screen for the black dot
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;

//     // Webgazer setup
//     const webgazer = window.webgazer;
//     webgazer
//       .setGazeListener((data, timestamp) => {
//         if (data) {
//           console.log("Gaze coordinates:", data.x, data.y);
//           console.log("Black dot coordinates:", centerX, centerY);

//           if(centerX == data.x && centerY == data.y){
//             webgazer.stop();
//           }
//         } else {
//           console.log("Gaze data is null");
//         }
//       })
//       .begin();
//   }, []);

//   return (
//     <div>
//       {/* Static black dot in the center of the screen */}
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           width: "20px",
//           height: "20px",
//           backgroundColor: "black",
//           borderRadius: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 1000,
//         }}
//       ></div>
//     </div>
//   );
// };

// export default WebgazerComponent;

