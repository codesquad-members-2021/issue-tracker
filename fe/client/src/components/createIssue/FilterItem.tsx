import React from 'react'
import styled from 'styled-components';
import FilterTab from '@components/common/FilterTab';
import ProgressBar from '@components/common/ProgressBar';
import Label from '@components/common/Label';
import { filterCheckboxListAtom } from '@components/common/atoms/filterAtom';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import API from '@/utils/API';

const filterNames: { [key: string]: { apiName: string; name: string } } = {
  manager: { apiName: 'users', name: '담당자' },
  label: { apiName: 'labels', name: '레이블' },
  milestone: { apiName: 'milestones', name: '마일스톤' },
}

const FilterItem = ({ header }: { header: string }) => {
  const { apiName } = filterNames[header];
  const [issueList] = useFetch(API.get[apiName]);
  const { data }: AsyncState<any, any> = issueList;
  const [checkedItems] = useRecoilState(filterCheckboxListAtom);

  return (
    <>
      {header === 'manager' && checkedItems[header].length
        ? checkedItems[header].map(({ name, info }: { name: string, info: any }) => {
          return <CheckedItemWrapper key={name}>
            <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" alt="" />
            <span>{name}</span>
          </CheckedItemWrapper>
        })
        : null
      }

      {header === 'label' && checkedItems[header].length
        ? checkedItems[header].map(({ name, info: { color } }: { name: string, info: any }) => {
          return <CheckedItemWrapper key={name}>
            <Label name={name} color={color} />
          </CheckedItemWrapper>
        })
        : null
      }

      {header === 'milestone' && checkedItems[header].length
        ? checkedItems[header].map(({ name, info }: { name: string, info: any }) => {
          const { openedIssueCount, closedIssueCount } = info;
          const allIssueCount = openedIssueCount + closedIssueCount;
          return <ProgressBarWrapper key={name}>
            <ProgressBar variant="determinate" value={openedIssueCount / allIssueCount * 100} />
            <span>{name}</span>
          </ProgressBarWrapper>
        })
        : null
      }

      {data && <FilterTab
        {...{ header }}
        inputType='checkbox'
        filterList={data} />}
    </>
  )
}

const CheckedItemWrapper = styled.div`
  display: flex;
  margin: 0 32px 16px 32px;
  color: #6E7191;
  place-items: center;
`;

const ImageTag = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 8px;
  border-radius: 50%;
`;

const ProgressBarWrapper = styled.div`
  margin: 0 32px 16px 32px;
  > span {
    display:inline-block;
    margin-top: 8px;
  }
`;

export default React.memo(FilterItem);
