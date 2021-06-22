import styled from 'styled-components';
import { TChildren } from '../../util/types';

interface ILogo {
  children?: TChildren;
}

const Logo = ({ children, ...props }: ILogo) => {
  return <LogoLayout {...props}>{children}</LogoLayout>;
};

export default Logo;

// --- Styled Components ---
const LogoLayout = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XL};
  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: ${({ theme }) => theme.fontWeight.middle};
  font-style: italic;
`;
