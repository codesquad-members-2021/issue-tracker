import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { labelMilestoneCountAtom } from "@components/common/atoms/labelMilestoneAtom";
import useFetch, { AsyncState } from "@/utils/hook/useFetch";
import API from "@/utils/API";
import { useRecoilState } from "@/utils/myRecoil/useRecoilState";
import LabelIcon from '@/Icons/Label.svg';
import MilestoneIcon from '@/Icons/Milestone.svg';

const LabelMilestoneToggle = () => {
  const location = useLocation();
  const [labelState] = useFetch(API.get.labelsCount);
  const [milestoneState] = useFetch(API.get.milestonesCount);
  const { data: labelData }: AsyncState<any, any> = labelState;
  const { data: milestoneData }: AsyncState<any, any> = milestoneState;
  const [, setLabelMilestoneCountState] = useRecoilState(labelMilestoneCountAtom);

  useEffect(() => {
    if (!(labelData && milestoneData)) return;
    setLabelMilestoneCountState({
      label: labelData.count,
      milestone: milestoneData.count
    });
  }, [labelData, milestoneData]);

  return (
    <ToggleWrapper>
      <Link to="/labelList">
        <ToggleItem>
          <RadioButton type="radio" name="labelMilestone"
            defaultChecked={location.pathname === '/labelList'} />
          <LabelBelongSpanLeft> <img src={LabelIcon} alt="" /> &nbsp; 레이블
            {labelData && ` (${labelData.count})`}
          </LabelBelongSpanLeft>
        </ToggleItem>
      </Link>
      <Link to="/milestoneList">
        <ToggleItem>
          <RadioButton type="radio" name="labelMilestone"
            defaultChecked={location.pathname === '/milestoneList'} />
          <LabelBelongSpanRight>  <img src={MilestoneIcon} alt="" /> &nbsp; 마일스톤
            {milestoneData && ` (${milestoneData.count})`}
          </LabelBelongSpanRight>
        </ToggleItem>
      </Link>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 40px;
  font-weight: 700;
  color: #6e7191;
`;

const ToggleItem = styled.label`
  width: 160px;
  height: 100%;
  text-align: center;

  &:hover > span {
    background: #eff0f6;
  }
`;

const RadioButton = styled.input`
  display: none;
  &:checked + span {
    background: #d9dbe9;
  }
`;

const LabelBelongSpanLeft = styled.span`
  height: 100%;
  width: 100%;
  background: #f5f5f7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 11px 0 0 11px;
  border: 1px solid #d9dbe9;
  &:hover {
    cursor: pointer;
  }
`;

const LabelBelongSpanRight = styled(LabelBelongSpanLeft)`
 border-radius: 0 11px 11px 0;
  border-left:0;
`;

export default LabelMilestoneToggle;
