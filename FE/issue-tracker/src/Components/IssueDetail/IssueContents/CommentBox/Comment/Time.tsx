import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  createdTime: string;
}

const Time = ({ createdTime }: Props) => {
  // getCreatedTime함수로 시간 만들어줄 예정
  return <S.Time>{createdTime}</S.Time>;
};

export default Time;
