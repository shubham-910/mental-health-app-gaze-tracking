import React, { useState } from "react";
import forgotpassword from "../assets/forgotpassword.svg"; // Import your image

const ForgetpasswordComp = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to send reset password link
        console.log("Password reset link sent to:", email);
    };

    return (
        <div className="forgetpass bg-theme-background min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Forgot your password?</h2>
                <div className="flex justify-center mb-6">
                    <img src={forgotpassword} alt="Forgot Password" className="w-44 h-49" />
                </div>
                <h4 className="text-xs justify-center flex text-left mb-6">
                  Enter the email address associated with your account, <br /> 
                  and we'll send you a link to reset your password.
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm mb-2 font-medium text-gray-700">
                            Enter your email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="name@example.com" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-theme-primarybutton text-white py-2 px-4 rounded-lg hover:bg-theme-primarybutton-hover transition"
                    >
                        Send Reset Link
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Have an account ? <a href="/login" className="text-theme-primarybutton font-medium hover:underline">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetpasswordComp;
