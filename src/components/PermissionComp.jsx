import React from "react";
import { useNavigate } from "react-router-dom"; 
import cameraPermission from "../assets/cameraPermission.svg"; 

const PermissionComp = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleCancel = () => {
        // Navigate to the main page (or whatever route you define for the main page)
        navigate("/home");
    };

    const handleContinue = () => {
        // Navigate to the next step, maybe a camera permission granting step or another route
        navigate("/gazetrack"); // Replace with your actual route for the next step
    };

    return (
        <div className="permission-comp bg-theme-background min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <img src={cameraPermission} alt="Camera Permission" className="w-44 h-49" loading="lazy"/>
                </div>

                <div className="mb-6">
                    <h1 className="text-sm font-bold text-center">Smile please!</h1>
                    <h4 className="text-sm text-center">
                        We need camera access to track your gaze.
                    </h4>
                </div>
                
                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Cancel Button */}
                    <button 
                        className="w-1/2 mr-2 py-2 px-4 border border-black text-red-500 bg-white rounded-lg hover:bg-gray-100 transition"
                        onClick={handleCancel} // Call handleCancel when clicked
                    >
                        Cancel
                    </button>
        
                    {/* Continue Button */}
                    <button 
                        className="w-1/2 ml-2 py-2 px-4 bg-theme-primarybutton text-white rounded-lg hover:bg-theme-primarybutton-hover transition"
                        onClick={handleContinue} // Call handleContinue when clicked
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PermissionComp;
