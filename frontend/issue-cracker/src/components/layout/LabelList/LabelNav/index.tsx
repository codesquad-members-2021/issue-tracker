import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL } from '../../../../utils/const';
import ButtonGroup from '../../../common/group/ButtonGroup';
import TapGroup from '../../../common/group/TabGroup';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useRecoilState } from 'recoil';
import { addState } from '../../../../store/Recoil';

const LabelNav: FC = () => {
  const [issueAddState, setIssueAddState] = useRecoilState(addState);

  const handleClickbutton = () => setIssueAddState((prev) => !prev);

  return (
    <LabelNavDiv>
      <LabelNavContainer>
        <TabBox>
          <TapGroup />
        </TabBox>
        {issueAddState ? (
          <ButtonBox onClick={handleClickbutton}>
            <ButtonGroup
              type={SMALL_FILL}
              name={'삭제'}
              icon={<DeleteOutlineIcon style={{ fontSize: 16 }} />}
            />
          </ButtonBox>
        ) : (
          <ButtonBox onClick={handleClickbutton}>
            <ButtonGroup
              type={SMALL_FILL}
              name={'추가'}
              icon={<AddIcon style={{ fontSize: 16 }} />}
            />
          </ButtonBox>
        )}
      </LabelNavContainer>
    </LabelNavDiv>
  );
};

export default LabelNav;

const LabelNavDiv = styled.div`
  margin-bottom: 20px;
`;

const LabelNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabBox = styled.div`
  display: flex;
  align-items: baseline;
`;

const ButtonBox = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: flex-end;
`;
