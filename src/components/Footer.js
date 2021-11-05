import { StyledFooter } from "../styles";

const Footer = (props) => {
  return (
    <StyledFooter>
      <h1>Copyright &copy; All Rights Reserved Que Como {new Date().getFullYear()}</h1>
    </StyledFooter>
  );
};

export default Footer;
