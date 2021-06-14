import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  imgUrl: string;
}

const UserImage = ({ imgUrl }: Props) => {
  return <S.UserImage src={imgUrl} />;
};

export default UserImage;
