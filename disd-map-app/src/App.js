import './App.css';

//Component
import DistrictButtons from "./components/buttons"
import GoogleMap from "./components/map"

function App() {
  return (
    <div className="App">
    
      <DistrictButtons></DistrictButtons>
      <GoogleMap></GoogleMap>
    </div>
  );
}

export default App;
