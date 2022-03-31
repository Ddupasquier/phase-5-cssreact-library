import React from "react";
import "./segments.css";
import SegmentTop from "./SegmentTop";
import SegmentMiddle from "./SegmentMiddle";
import SegmentBottom from "./SegmentBottom";
import SegmentModal from "./SegmentModal";

function Segments({allComps, user, userFav, setUserFav}) {
  return (
    <div className="segments-container">
      <SegmentModal allComps={allComps} user={user} userFav={userFav} setUserFav={setUserFav} />
      <SegmentTop />
      <SegmentMiddle />
      <SegmentBottom />
    </div>
  );
}

export default Segments;
