import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-button-cover">
        <div id="button-3" className="button r ">
          <input className="checkbox" type="checkbox" />
          <div className="knobs" />
          <div className="layer" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-button-cover {
  display: table-cell;
  position: relative;
  width: 200px;
//   height: 20px;
  box-sizing: border-box;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d7e3e3;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  width: 100px;
  height: 36px;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ff003c;
  transition: 0.3s ease all;
  z-index: 1;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

#button-3 .knobs:before {
  content: "Offline";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 30px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #eb0202;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before {
  width: 100px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
//   margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  content: "Online";
  left: 60px;
  background-color: #8fbd79;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #8fbd79;
}
`;

export default Switch;

