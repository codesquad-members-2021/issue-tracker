import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  isShow: boolean;
}

const AuthorLabel = ({ isShow }: Props) => {
  return <S.AuthorLabel isShow={isShow}>작성자</S.AuthorLabel>;
};

export default AuthorLabel;
