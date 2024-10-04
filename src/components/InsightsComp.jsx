import React from "react";
import NavbarManu from "./NavbarMenu";
import Footer from "../pages/Footer";

const InsightsComp = () => {
    return (
        <div className="bg-theme-background min-h-screen flex flex-col justify-between">
            <NavbarManu />
            <div className="flex-grow mt-12 flex items-center justify-center">
                <div className="text-center bg-white p-10 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4 text-theme-primary">Insights</h1>
                    <p className="text-lg text-gray-700">
                        There is no information to show until you take a gaze test.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default InsightsComp;