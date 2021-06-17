import { ThemeProvider } from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import { AvatarDiv } from "./AtomicComponentsStyles";

type UserProfileProps = {
  imgUrl?: string;
  size?: number;
};

const UserProfile = ({ imgUrl, size }: UserProfileProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AvatarDiv src={imgUrl} size={size}></AvatarDiv>
    </ThemeProvider>
  );
};

export default UserProfile;
