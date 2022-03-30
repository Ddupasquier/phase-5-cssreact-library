import React from "react";
import FormLogin1 from "./FormLogin1";
import FormLogin2 from "./FormLogin2";
import FormSimple from "./FormSimple";
import FormsModal from "./FormsModal";

function Forms({ allComps, setAllComps, user, userFav, setUserFav }) {
  return (
    <>
      <div className="forms-container">
        <FormsModal
          allComps={allComps}
          setAllComps={setAllComps}
          user={user}
          userFav={userFav}
          setUserFav={setUserFav}
        />
        <h3>Form - Simple</h3>
        <FormSimple />
        <hr />
        <h3>Form - Login1</h3>
        <FormLogin1 />
        <hr />
        <h3>Form - Login2</h3>
        <FormLogin2 />
      </div>
    </>
  );
}

export default Forms;
