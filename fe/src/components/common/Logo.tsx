import styled from 'styled-components';

const Logo = () => <LogoContainer>Issue Tracker 🏄🏻‍♂️</LogoContainer>;

const LogoContainer = styled.div`
  font-size: 3.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.color.grayscale.titleActive};
`;

export default Logo;
