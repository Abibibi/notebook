import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


export const Container = styled.div`
height: 100%;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.color.white};
`;

export const Blocks = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  ${SCREEN.DESKTOP} {
    flex-direction: row;
  }
`

export const First = styled.div`
  background-color: ${({ theme }) => theme.color.seafoam};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.XL};
  height: 14%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${SCREEN.DESKTOP} {
    align-items: flex-start;
    height: 100%;
    width: 50%;
  }

  h1 {
    ${SCREEN.DESKTOP} {
      display: block;
      width: 100%;
      margin-bottom: 5vh;
    }
  }

  img {

    ${SCREEN.PHONE} {
      width: 170px;
    }

    ${SCREEN.DESKTOP} {
      margin: 7% 0 0 5%;
      width: 70%;
    }
  }

  h2 {
    display: none;
    text-align: center;
    font-size: ${({ theme }) => theme.font.L};
    ${SCREEN.DESKTOP} {
      display: block;
      margin: 0 0 0 11%;
      font-size: 3.4vh;
    }

    span {
      display: block;
      margin-top: ${({ theme }) => theme.spacing.S};
      ${SCREEN.DESKTOP} {
        margin-top: 2.4vh;
        font-size: 4.1vh;
      }
    }
  }
  
`;

export const Second = styled.div`
  height: 50%;
  width: 100%;
  color: ${({ theme }) => theme.color.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${SCREEN.TABLET} {
    padding: 0 5rem;
  }
  ${SCREEN.DESKTOP} {
    height: 100%;
    width: 50%;
    padding: ${({ theme }) => theme.spacing.XL};
  }

  h1 {
    font-size: 3.5vh;
    color: ${({ theme }) => theme.color.gray};
    font-weight: 600;
    margin: 7vh 0 5vh;

    ${SCREEN.DESKTOP} {
      margin: 4vh 0 4vh 10%;
      align-self: flex-start;
    }
  }
`;
