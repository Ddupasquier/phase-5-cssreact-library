import "./App.css";
import NavbarSimple from "./Components/NavbarSimple"
import ModalSimple from "./Components/ModalSimple"
import Buttons from "./Components/Buttons"
import Forms from "./Components/Forms"
import Segments from "./Components/Segments"
import SegmentTop from "./Components/SegmentTop"
import SegmentMiddle from "./Components/SegmentMiddle"
import SegmentBottom from "./Components/SegmentBottom"


function App() {
  return (
    <div className="App">
      <NavbarSimple /><br />
      <ModalSimple />
      <Buttons />
      <Forms />
      <Segments />
      <div className="tmb-segment">
      <SegmentTop />
      <SegmentMiddle />
      <SegmentBottom />
      </div>
    </div>
  );
}

export default App;
