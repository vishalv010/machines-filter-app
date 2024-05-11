import './App.css';
import { FiltersContainer } from './components/FiltersContainer';
import { useState, useEffect } from 'react';
import { MachinesList } from './components/MachinesList';
import { getFilteredMachines } from './utility';

function App() {
  const [activeButton, setActiveButton] = useState("");
  const [machinesList, setMachinesList] = useState([]);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  useEffect(() => {
     const filteredMachines = getFilteredMachines(activeButton);
     setMachinesList(filteredMachines);
  }, [activeButton]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h4>Machines List</h4>
        </nav>
      </header>
      <br />
      <FiltersContainer activeButton={activeButton} onButtonClick={handleButtonClick} />
      <br />
      <MachinesList machinesList={machinesList} />
    </div>
  );
}

export default App;
