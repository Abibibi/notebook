import styled from 'styled-components'
import { SCREEN } from '../../styles/theme'


const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 4vh;
  ${SCREEN.DESKTOP} {
    width: 80%;
  }

  div {
    width: 100%;
    position: relative;

    input {
      color: ${({ theme }) => theme.color.gray};
      width: 100%;
      border: ${({ theme }) => theme.color.lightBrown} solid .1vh;
      padding: 1.5vh;
      font-size: 2vh;
    }
  
    label {
      position: absolute;
      color: ${({ theme }) => theme.color.lightBrown};
      font-size: 2vh;
      top: 50%;
      left: 1.5vh;
      right: 0;
      transform: translateY(-50%);
      cursor: default;
    }

  }

  p {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1.8vh;
    margin-top: 1vh;
  }

  .higher {
    font-size: 1.5vh;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    color: ${({ theme }) => theme.color.brown};
  }

  .lower {
    padding-top: 2.5vh;
    padding-bottom: .5vh;
  }

  .animation {
    animation: label .5s;
    /* with animation-fill-mode property,
    styles are kept as such one animation
    is done */
    animation-fill-mode: forwards;
  }

  @keyframes label {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2vh);
    }
  }

  .error {
    color: ${({ theme }) => theme.color.red};
  }
`;

export default FieldWrapper;
