import { UserPlus } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Invite = ({onClick}) => {
  return (
    <StyledWrapper >
      <button className="cssbuttons-io-button" onClick={onClick}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
          />
        </svg> */}
        <UserPlus />
        <span className="ml-2">Share</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
  display: flex;
  width: 165px;
  height: 40px;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  padding: 0.5em 1em 0.5em 1em;
  color: white;
  background: #ed33e1;
  background: linear-gradient(
    0deg,
    #ca00f8 0%,
    #ca00f8 100%
  );
  border: none;
  box-shadow: 0 0.3em 1.5em -0.5em #ed33e1;
//   letter-spacing: 0.05em;
  border-radius: 20em;
}

// .cssbuttons-io-button svg {
//   margin-right: 8px;
// }

.cssbuttons-io-button:hover {
  box-shadow: 0 0.7em 1.5em -0.5em #ed33e1;
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em #ed33e1;
}

`;

export default Invite;
