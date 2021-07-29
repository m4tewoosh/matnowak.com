import styled from 'styled-components';
import media from '../../styles/media';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import TextField from '@material-ui/core/TextField';

export const StyledBlob = styled(Blob)`
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3000;
  path {
    fill: #251f3d;
  }
`;

export const StyledContact = styled.section`
  padding: 7rem 0;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (max-width: 425px) {
    padding: 5rem 6rem;
  }
`;

export const Header = styled.h2`
  color: #181333;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  > div {
    width: 100%;
    margin-bottom: 4rem;
    label {
      font-family: 'Poppins', sans-serif;
    }
  }

  @media ${media.tabletL} {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 600;
  color: #181333;
  width: 10rem;
  height: 4.6rem;
  border: none;
  border-radius: 1rem;
  background: var(--gradient);
  transition: transform 0.2s ease 0s;

  svg {
    font-size: 3rem;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
  }

  @media ${media.mobileL} {
    align-self: center;
  }
`;

export const StyledTextField = styled(TextField)`
  &&& {
    .MuiInputBase-root,
    .MuiInputBase-input,
    .MuiFormLabel-root,
    label {
      font-size: 1.6rem;
    }

    .MuiFormHelperText-root {
      font-size: 1.15rem;
    }
  }
`;
