import React from "react";
import ButtonModal from "./ButtonModal";
import "./buttons.css";

function Buttons({ allComps, user, userFav, setUserFav }) {
  return (
    <>
      <div className="button-segment">
        <ButtonModal allComps={allComps} user={user} userFav={userFav} setUserFav={setUserFav} /><br />
        <div className="segment off-white light-shadow"><p>
          Just for reference, here's a completely unstyled button. Boring,
          right?
        </p>
        <button className="button btn1">Simple No CSS Button (btn1)</button></div>
        <hr />
        <button className="button btn2">BIGREDBUTTON (btn2)</button>
        <hr />
        <button className="button btn3">Classy Blue (btn3)</button>
        <button className="button btn4">Classy Grey (btn4)</button>
        <button className="button btn5">Classy Black (btn5)</button>
        <hr />
        <button className="button btn6">Classy Blue w/focus (btn6)</button>
        <button className="button btn7">Classy Grey w/focus (btn7)</button>
        <button className="button btn8">Classy Black w/focus (btn8)</button>
        <br />
        <div className="light-grey top-segment light-shadow">
          <button className="button btn9">Button (btn9)</button>
          <button className="button btn10">Button (btn10)</button>
          <button className="button btn11">Button (btn11)</button>
          <button className="button btn12">Button (btn12)</button>
          <button className="button btn13">Button (btn13)</button>
        </div>
        <div className="charcoal bottom-segment light-shadow">
          <button className="button btn9">Button (btn9)</button>
          <button className="button btn10">Button (btn10)</button>
          <button className="button btn11">Button (btn11)</button>
          <button className="button btn12">Button (btn12)</button>
          <button className="button btn13">Button (btn13)</button>
          <hr />
          <button className="button btn14">Button (btn14)</button>
          <button className="button btn15">Button (btn15)</button>
          <button className="button btn16">Button (btn16)</button>
          <button className="button btn17">Button (btn17)</button>
          <button className="button btn18">Button (btn18)</button>
        </div>
        <div className="segment off-white light-shadow">
          <button className="button btn19">Gradient Button (btn19)</button>
          <button className="button btn20">Gradient Button (btn20)</button>
          <button className="button btn21">Gradient Button (btn21)</button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
