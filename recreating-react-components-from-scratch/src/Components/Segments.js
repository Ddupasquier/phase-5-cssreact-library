import React from "react";
import "./segments.css";
import SegmentTop from "./SegmentTop";
import SegmentMiddle from "./SegmentMiddle";
import SegmentBottom from "./SegmentBottom";

function Segments() {
  return (
    <div className="tmb-segment">
      <SegmentTop />
      <SegmentMiddle />
      <SegmentBottom />
    </div>
  );
}

export default Segments;
