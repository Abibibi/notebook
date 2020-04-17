import styled from 'styled-components'
import { SCREEN } from '../../styles/theme'


export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

    ${SCREEN.DESKTOP} {
      align-self: flex-start;
      margin-left: 10%;
      margin-top: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.color.gray};
    margin: 7% 5%;
    font-size: 2vh;
    text-decoration: underline;
  }

  ${SCREEN.DESKTOP} {
    a {
      align-self: self-start;
      margin: 5% 10%;
    }
  }
`
