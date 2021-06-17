import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  username: string;
}

const UserName = ({ username }: Props) => {
  return <S.UserName>{username}</S.UserName>;
};

export default UserName;
