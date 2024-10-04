import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LandingPage from './pages/LandingPage';
import PermissionPage from './pages/PermissionPage';
import AboutUs from './pages/AboutUs';
import ForgetPassword from './pages/ForgetPassword';
import WebgazerComponent from './components/WebgazerComponent';
import CalPageMain from './pages/CalPageMain';
import CalibrationGrid from './components/CalibrationGrid';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Insight from './pages/Insight';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/permission' element={<PermissionPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/gazetrack' element={<WebgazerComponent />} />
        <Route path='/calibration' element={<CalPageMain />} />
        <Route path='/calibrate' element={<CalibrationGrid />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/insights' element={<Insight />} />
      </Routes>
    </Router>
  );
};

export default App;