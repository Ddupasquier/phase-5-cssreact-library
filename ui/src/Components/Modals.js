import React from "react";
import ModalLogin1 from "./ModalLogin1";
import ModalLogin2 from "./ModalLogin2";
import ModalSimple from "./ModalSimple";
import ModalsModal from "./ModalsModal";

function Modals({ allComps, setAllComps, user, userFav, setUserFav }) {
  return (
    <div className="modals-container">
      <ModalsModal
        allComps={allComps}
        setAllComps={setAllComps}
        user={user}
        userFav={userFav}
        setUserFav={setUserFav}
      />
      <br />
      <div className="modal-btn-container light-grey">
        Click The Buttons To See The Assorted Modals<br />
        <ModalSimple />
        <ModalLogin1 />
        <ModalLogin2 />
      </div>
    </div>
  );
}

export default Modals;
