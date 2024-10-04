import { useEffect } from "react";

const WebgazerComponent = () => {

    const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/webgazer";
        script.async = true;
        document.body.appendChild(script);

    useEffect(() => {
        const webgazer = window.webgazer;
        webgazer.setGazeListener((data,timestamp)=>{
            if(data){
                const gazeData = {
                    gazeX : data.x,
                    gazeY : data.y,
                    timestamp : timestamp,

                };
            console.log(gazeData);
            }
        }).begin();
        webgazer.showVideoPreview(true).showPredictionPoints(true);
    },[]);
};

export default WebgazerComponent;

// import { useEffect, useState } from "react";

// const WebgazerComponent = () => {
//     // const [gazeLogs, setGazeLogs] = useState([]); // State to hold the gaze data logs

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/webgazer";
//         script.async = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//             const webgazer = window.webgazer;

//             // Start Webgazer and collect gaze data
//             webgazer.setGazeListener((data, timestamp) => {
//                 if (data) {
//                     const gazeData = {
//                         gazeX: data.x,
//                         gazeY: data.y,
//                         timestamp: timestamp,
//                     };

//                     // Add each data point to the gazeLogs array
//                     // setGazeLogs((prevLogs) => [...prevLogs, gazeData]);

//                     console.log("Gaze Data:", gazeData);
//                 }
//             }).begin();

//             webgazer.showVideoPreview(true).showPredictionPoints(true);

//             // Stop Webgazer and download the file after 3 minutes (180000 milliseconds)
//             // setTimeout(() => {
//             //     webgazer.end();
//             //     console.log("Webgazer stopped after 3 minutes.");

//             //     // After stopping Webgazer, download the collected gaze data as a file
//             //     // downloadLogs();
//             // }, 60000); // 3 minutes in milliseconds
//         };

//         return () => {
//             const webgazer = window.webgazer;
//             if (webgazer) {
//                 webgazer.end();
//                 console.log("Webgazer stopped.");
//             }
//         };
//     }, []);

//     // Function to download logs from gazeLogs as a text file
//     // const downloadLogs = () => {
//     //     if (gazeLogs.length > 0) {
//     //         const fileData = JSON.stringify(gazeLogs, null, 2); // Convert gazeLogs array to JSON string
//     //         const blob = new Blob([fileData], { type: "application/json" });
//     //         const url = URL.createObjectURL(blob);
//     //         const a = document.createElement("a");
//     //         a.href = url;
//     //         a.download = "gaze_logs.json"; // Download logs as a JSON file
//     //         document.body.appendChild(a);
//     //         a.click(); // Trigger download
//     //         document.body.removeChild(a);
//     //         URL.revokeObjectURL(url); // Clean up the object URL
//     //         console.log("Gaze logs downloaded.");
//     //     } else {
//     //         console.log("No gaze data to download.");
//     //     }
//     // };

//     return null; // No need to render anything in the UI
// };

// export default WebgazerComponent;


