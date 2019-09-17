import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 2rem;
  background: var(--primaryColor);
  color: var(--background);
  width: 60%;
  text-align: -webkit-center;
  z-index: 3;
  display: flex;
  justify-content: center;
  border: 0.05rem solid var(--background);
  border-radius: 0.5rem;
  &:hover {
    background: #fd7e14;
    transition: var(--mainTransition);
  }
  &:focus {
    outline: none;
  }
`;
