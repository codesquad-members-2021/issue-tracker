import Avatar from "@material-ui/core/Avatar";
import styled, { ThemeProvider } from "styled-components";
import { StylesProvider, useTheme } from "@material-ui/core/styles";

type UserProfileProps = {
  imgUrl?: string;
  size?: number;
};

const UserProfile = ({ imgUrl, size }: UserProfileProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <AvatarDiv src={imgUrl} size={size}></AvatarDiv>
      </StylesProvider>
    </ThemeProvider>
  );
};

const AvatarDiv = styled(Avatar)<{ size?: number }>`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

export default UserProfile;
