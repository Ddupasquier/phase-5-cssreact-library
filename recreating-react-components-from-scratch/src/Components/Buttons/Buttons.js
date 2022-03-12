import React from "react";
import "./buttons.css";

function Buttons() {
  return (
    <>
      <button className="button btn1">Simple No CSS Button (b1)</button>
      <br />
      <button className="button btn2">BIGREDBUTTON (b2)</button>
      <br />
      <button className="button btn3">Classy Blue (b3)</button>
      <button className="button btn4">Classy Grey (b4)</button>
      <button className="button btn5">Classy Black (b5)</button>
      <br />
      <button className="button btn6">Classy Blue w/focus (b6)</button>
      <button className="button btn7">Classy Grey w/focus (b7)</button>
      <button className="button btn8">Classy Black w/focus (b8)</button>
      <br />
      <div className="off-white segment">
        <button className="button btn9">Button (b9)</button>
        <button className="button btn10">Button (b10)</button>
        <button className="button btn11">Button (b11)</button>
        <button className="button btn12">Button (b12)</button>
        <button className="button btn13">Button (b13)</button>
      </div>
      <div className="charcoal segment">
        <button className="button btn9">Button (b9)</button>
        <button className="button btn10">Button (b10)</button>
        <button className="button btn11">Button (b11)</button>
        <button className="button btn12">Button (b12)</button>
        <button className="button btn13">Button (b13)</button>
        <hr />
        <button className="button btn14">Button (b14)</button>
        <button className="button btn15">Button (b15)</button>
        <button className="button btn16">Button (b16)</button>
        <button className="button btn17">Button (b17)</button>
        <button className="button btn18">Button (b18)</button>
      </div>
    </>
  );
}

export default Buttons;