import "./App.css";
import Buttons from "./Components/Buttons/Buttons";
import Forms from "./Components/Forms/Forms";
import Segments from "./Components/Segments/Segments";
import SimpleModal from "./Components/Modal/SimpleModal/SimpleModal";
import TopSegment from "./Components/Segments/TopSegment";
import MiddleSegment from "./Components/Segments/MiddleSegment";
import BottomSegment from "./Components/Segments/BottomSegment";

function App() {
  return (
    <div className="App">
      <SimpleModal />
      <Buttons />
      <Forms />
      <Segments />
      <div className="tmb-segment">
      <TopSegment />
      <MiddleSegment />
      <BottomSegment />
      </div>
    </div>
  );
}

export default App;
