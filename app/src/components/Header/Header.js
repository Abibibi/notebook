import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  padding: 3vh 2vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  ${SCREEN.DESKTOP} {
    justify-content: space-between;
  }

  h1 {
    ${SCREEN.DESKTOP} {
      width: 68%;
    }

    img {
      ${SCREEN.DESKTOP} {
        width: 30%;
      }
    }
  }

  h2 {
    display: none;
    ${SCREEN.DESKTOP} {
      display: block;
      font-size: 3vh;
      margin-right: ${({ theme }) => theme.spacing.XL};
    }
  }
`;

export default HeaderWrapper;
