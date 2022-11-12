import AllAdsSection from './components/Molecules/AllAdsSection'
import FirstSection from './components/Molecules/FirstSection';


function App() {
  return (
    <div className='flex flex-col lg:container lg:justify-center mt-10 gap-4 lg:flex-row' >
      <FirstSection/>
      <AllAdsSection/>
    </div>
  );
}

export default App;
