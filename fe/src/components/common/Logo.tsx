import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/issues">
    <LogoContainer>Issue Tracker 🏄🏻‍♂️</LogoContainer>
  </Link>
);

const LogoContainer = styled.div`
  font-size: 3.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.color.grayscale.titleActive};

  &:hover {
    cursor: pointer;
  }
`;

export default Logo;
