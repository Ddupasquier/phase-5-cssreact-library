import "./App.css";
import Buttons from "./Components/Buttons/Buttons";
import Forms from "./Components/Forms/Forms";
import Segments from "./Components/Segments/Segments";
import SimpleModal from "./Components/Modal/SimpleModal/SimpleModal";


function App() {
  return (
    <div className="App">
      <Buttons />
      <Forms />
      <Segments />
      <SimpleModal />
    </div>
  );
}

export default App;
