import React from 'react'
import styled from 'styled-components';
import HeadContent from '@components/labelList/HeadContent';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import LabelSwitching from '@components/labelList/LabelSwitching';
import { LabelSwitchType } from '@components/common/types/LabelType';
import { labelMilestoneCountAtom } from '@components/common/atoms/labelMilestoneAtom';
import API from '@/utils/API';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';

type LabelsType = LabelSwitchType & {
  id: number;
}

const LabelListPage = () => {
  const [labelMilestoneCount] = useRecoilState(labelMilestoneCountAtom);
  const [labelListState] = useFetch(API.get.labels);
  const { data, loading, error }: AsyncState<any, any> = labelListState;
  return (
    <>
      <HeadContent />
      <ListWrapper wrapWidth="100%">
        <ListHeader>{labelMilestoneCount.label}개의 레이블</ListHeader>
        {data && data.labels.map(({ id, description, name, color }: LabelsType) => {
          return <LabelSwitching key={id} {...{ description, name, color }} />
        })}
        {loading && <>loading...</>}
        {error && <>error...</>}
      </ListWrapper>
    </>
  )
}

const ListHeader = styled.div`
  color:#6E7191;
  font-weight:700;
`;

export default LabelListPage;
