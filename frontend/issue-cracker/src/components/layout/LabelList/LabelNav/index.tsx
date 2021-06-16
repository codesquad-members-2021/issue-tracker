import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL } from '../../../../utils/const';
import ButtonGroup from '../../../common/group/ButtonGroup';
import TapGroup from '../../../common/group/TabGroup';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const LabelNav: FC = () => {
  return (
    <LabelNavDiv>
      <LabelNavContainer>
        <TabBox>
          <TapGroup />
        </TabBox>
        <Link to="/main/label-add">
          <ButtonBox>
            <ButtonGroup
              type={SMALL_FILL}
              name={'추가'}
              icon={<AddIcon style={{ fontSize: 16 }} />}
            />
          </ButtonBox>
        </Link>
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
