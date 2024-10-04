import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="bg-theme-background min-h-screen text-white flex flex-col justify-between">
      {/* Navbar */}
      <NavbarMenu />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">About Our Application</h1>

            {/* General Info Section */}
            <p className="text-lg leading-relaxed text-justify mb-8">
                This application was built with the purpose of helping individuals manage and reduce anxiety and stress through modern technological solutions. By leveraging advanced features such as gaze tracking, personalized exercises, and real-time feedback, we aim to provide users with tools that will help improve their mental well-being. Our approach is rooted in scientifically-backed strategies designed to make mental health support accessible and effective.
            </p>

            {/* What We Do */}
            <h2 className="text-3xl font-bold mb-4">What We Do?</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                We offer an innovative platform that integrates cutting-edge technologies like gaze tracking and machine learning to help users gain insights into their mental health patterns. Through personalized feedback and targeted interventions, we empower individuals to take control of their mental well-being. Our aim is to help people manage anxiety, reduce stress, and build resilience using data-driven techniques.
            </p>

            {/* Why This Website Exists */}
            <h2 className="text-3xl font-bold mb-4">Why our Website?</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                Mental health challenges affect millions of people around the world, yet many do not have access to effective tools or resources. This website exists to bridge that gap by providing easy-to-use, science-backed tools that can be accessed anytime, anywhere. Whether you're dealing with anxiety, stress, or simply looking to improve your mental well-being, our platform is designed to meet you where you are in your mental health journey.
            </p>

            {/* Use of This Website */}
            <h2 className="text-3xl font-bold mb-4">How to Use This Website?</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                Our website is designed to be intuitive and user-friendly. Simply register for an account, and the platform will guide you through the process of setting up personalized exercises and tracking your mental health patterns. By using tools like gaze tracking and real-time feedback, you can gain valuable insights into your mental health and work towards reducing stress and anxiety.
            </p>

            {/* How We Do Our Work */}
            <h2 className="text-3xl font-bold mb-4">How We Do Our Work?</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                We combine technology and psychology to create effective mental health solutions. Our team works with mental health professionals to develop techniques that are both evidence-based and practical. By incorporating user data and feedback, we continuously refine our system to provide the best possible experience. Through machine learning algorithms, we tailor our interventions to suit each individual’s unique needs.
            </p>

            {/* What Tools We Use */}
            <h2 className="text-3xl font-bold mb-4">The Tools We Use?</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                We use a variety of modern tools to make our platform effective and user-friendly:
                <ul className="list-disc pl-8 mt-4">
                    <li>Gaze Tracking: Monitors where users focus their attention, allowing us to provide real-time feedback on stress levels and mental engagement.</li>
                    <li>Machine Learning: Our system continuously learns from user data to make predictions and provide personalized interventions.</li>
                    <li>Real-Time Feedback: Instant feedback is provided based on your interactions with the platform, helping you adjust your behavior for better outcomes.</li>
                    <li>Persuasive Strategies: We use techniques like framing, customization, and positive reinforcement to encourage users to stay engaged and motivated.</li>
                </ul>
            </p>

            {/* Add more content as needed */}
        </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
