import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LandingPage from './pages/LandingPage';
import PermissionPage from './pages/PermissionPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path='/main' element={<LandingPage />} />
        <Route path='/permission' element={<PermissionPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
