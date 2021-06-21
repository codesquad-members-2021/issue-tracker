import React, { FC } from 'react';
import styled from 'styled-components';
import { BUTTON_SIZE as BS, BUTTON_NAME as BN } from '../../../../utils/const';
import ButtonGroup from '../../../common/group/ButtonGroup';
import IssueFilter from './IssueFilter';
import TapGroup from '../../../common/group/TabGroup';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@material-ui/core';

const IssueNav: FC = () => {
  return (
    <IssueNavDiv>
      <IssueNavContainer>
        <SelectBox>
          <IssueFilter />
        </SelectBox>
        <AnotherBox>
          <TabBox>
            <TapGroup />
          </TabBox>
          <Link to="/main/issue-add">
            <Box>
              <ButtonGroup
                type={BS.SMALL_FILL}
                name={BN.WRITING_ISSUE}
                icon={<AddIcon style={{ fontSize: 16 }} />}
              />
            </Box>
          </Link>
        </AnotherBox>
      </IssueNavContainer>
    </IssueNavDiv>
  );
};

export default IssueNav;

const IssueNavDiv = styled.div`
  margin-bottom: 10px;
`;

const IssueNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AnotherBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TabBox = styled.div`
  display: flex;
  align-items: baseline;
`;
