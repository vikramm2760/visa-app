import { useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import './App.css';

function App() {
  const [residenceCountry, setResidenceCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");

  const handleCheckVisa = () => {
    if (residenceCountry && destinationCountry){
      alert(`Checking Visa requirements for travel from ${residenceCountry} to ${destinationCountry}...`);
    }
    else
    {
      alert("Please select both countries.");
    }
  };
  return (
    <div className="app-container">
    <h1>Visa Requirements Checker</h1>

    {/* Residence Country */}
    <CountryDropdown
      label="Your Residence Country"
      onSelect={setResidenceCountry}
    />

    {/* Destination Country */}
    <CountryDropdown
      label="Your Destination Country"
      onSelect={setDestinationCountry}
    />

    <button className="check-button" onClick={handleCheckVisa}>
      Check Visa Requirements
    </button>

    {residenceCountry && destinationCountry && (
      <p>
        Traveling from {residenceCountry} to {destinationCountry}.
      </p>
    )}
  </div>
  );
}

export default App;
