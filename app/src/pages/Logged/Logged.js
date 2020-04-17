import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const LoggedWrapper = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.color.brown};
  width: 90%;
  margin: 4vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${SCREEN.DESKTOP} {
    width: 80%;
    align-items: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${SCREEN.DESKTOP} {
      align-items: flex-start;
    }

    label {
      font-size: 3.5vh;
      font-weight: 600;
      ${SCREEN.DESKTOP} {
        font-size: 4vh;
        margin-top: 3vh;
      }
    }
  
    textarea {
      margin: 4vh 0;
      width: 100%;
      border: ${({ theme }) => theme.color.lightBrown} solid .1vh;
      outline: none;
      resize: none;
      min-height: 20vh;
      padding: 2vh;
  
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.color.lightBrown};
        font-family: sans-serif;
        font-size: 2.5vh;
      }
      :-moz-placeholder { /* Upto Firefox 18, Deprecated in Firefox 19  */
        color: ${({ theme }) => theme.color.lightBrown};
        font-family: sans-serif;
        font-size: 2.5vh;
      }
      ::-moz-placeholder {  /* Firefox 19+ */
        color: ${({ theme }) => theme.color.lightBrown};
        font-family: sans-serif; 
        font-size: 2.5vh; 
      }
      :-ms-input-placeholder {  
        color: ${({ theme }) => theme.color.lightBrown};
        font-family: sans-serif;
        font-size: 2.5vh; 
      }
    } 
  }

  button {
    border: ${({ theme }) => theme.color.brown} solid .3vh;
    background: ${({ theme }) => theme.color.brown};
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    padding: 1.5vh;
    margin-top: 1.5vh;

    &:hover {
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.brown};
    }

    &:active {
      position: relative;
      top: .3vh;
    }
  }

  h3 {
    font-size: 3.5vh;
    font-weight: 600;
    ${SCREEN.DESKTOP} {
      font-size: 4vh;
    }
    margin: 5vh 0 3vh;
  }

  li {
    margin-bottom: 2vh;
    font-size: 2.3vh;
  }
`;

export default LoggedWrapper;
