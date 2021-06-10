import React, { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import List from 'components/atom/List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useToggle from 'hooks/useToggle';
interface Props {}

export default function IssueListHeaderRight({}: Props): ReactElement {
  const [type, setType] = useState<string>('');

  const assigneeToggle = useRef<HTMLDivElement>(null);
  const labelToggle = useRef<HTMLDivElement>(null);
  const milestoneToggle = useRef<HTMLDivElement>(null);
  const authorToggle = useRef<HTMLDivElement>(null);
  const listModal = useRef<HTMLDivElement>(null);
  const filterStandards = [
    { name: '담당자', ref: assigneeToggle },
    { name: '레이블', ref: labelToggle },
    { name: '마일스톤', ref: milestoneToggle },
    { name: '작성자', ref: authorToggle },
  ];
  const open = useToggle({
    toggle: [assigneeToggle, labelToggle, milestoneToggle, authorToggle],
    modal: listModal,
    init: false,
  });

  const handleClick = (clickTarget: string): void => {
    setType(clickTarget);
  };
  return (
    <>
      <IssueListHeaderRightBlock>
        {filterStandards.map((standard, idx) => (
          <div ref={standard.ref} key={idx} onClick={() => handleClick(standard.name)}>
            {standard.name}
            <ExpandMoreIcon />
          </div>
        ))}
      </IssueListHeaderRightBlock>
      {open && <List type={type} modal={listModal} />}
    </>
  );
}

const IssueListHeaderRightBlock = styled.div`
  display: flex;
  position: relative;
  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;
