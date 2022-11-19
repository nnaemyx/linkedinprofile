// import { Route, Router, Routes } from 'react-router-dom';
import AdsSlider from './components/Atoms/AdsSlider';
import Footer from './components/Atoms/Footer';
import AllAdsSection from './components/Molecules/AllAdsSection'
import FirstSection from './components/Molecules/FirstSection';
import Blogpage from './components/Molecules/Blogpage';


function App() {
  return (
    <div>
      <div className="flex flex-col lg:container lg:justify-center mt-10 gap-4 lg:flex-row">
        <FirstSection />
        <AllAdsSection />
      </div>
      <Footer />
      <AdsSlider />
      <Blogpage/>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Blogpage/>}  />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
