import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";
import { IssueList as Issues } from "@/Utils/Mock/mockDatas";
import { useRecoilState } from "recoil";
import { IssueList } from "../../../HomeStore";
import { useEffect } from "react";

const IssueTableBody = () => {
  const [issueList, checkIssueList] = useRecoilState(IssueList);

  useEffect(() => {
    checkIssueList(Issues);
  }, []);

  return (
    <S.TableBody>
      {issueList.map((issue) => (
        <IssueTableRow issue={issue} key={issue.id} />
      ))}
    </S.TableBody>
  );
};

export default IssueTableBody;
