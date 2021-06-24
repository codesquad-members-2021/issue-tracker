import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import { Link } from 'react-router-dom';
import CheckBox from '../../../styles/atoms/CheckBox';
import Label from '../../../styles/atoms/Label';
import User from '../../../styles/atoms/User';
import { ReactComponent as MilestoneIcon } from '../../../icons/milestone.svg';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';

const Issues = ({ data }: any) => {
  return (
    <div>
      {data.map((issue: any, index: number) => {
        return (
          <IssueCell key={index}>
            <TextCell>
              <UpperCell>
                <div>
                  <CheckBox />
                </div>
                <UpperInfo>
                  <Title to={`/issues/${issue.id}`}>
                    <AlertCircle /> {issue.title}
                  </Title>
                  <Labels>
                    {issue.labels.map(
                      (
                        label: { id: number; title: string; color: string },
                        index: number
                      ) => {
                        return (
                          <Label
                            key={index}
                            title={label.title}
                            background={label.color}
                          />
                        );
                      }
                    )}
                  </Labels>
                </UpperInfo>
              </UpperCell>
              <LowerCell>
                <div>#{issue.id}</div>
                <div>
                  이 이슈가 {moment(issue.created_time).fromNow()},{' '}
                  {issue.writer.username}님에 의해 작성되었습니다.
                </div>
                {issue.milestone && (
                  <div>
                    <MilestoneIcon /> {issue.milestone.title}
                  </div>
                )}
              </LowerCell>
            </TextCell>
            <User imageURL={issue.writer.profile_image} />
          </IssueCell>
        );
      })}
    </div>
  );
};

const IssueCell = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${props => props.theme.greyscale.offWhite};
  margin: 1px 0px;
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

const Title = styled(Link)`
  padding-top: 2px;
  color: ${props => props.theme.greyscale.titleActive};
  text-decoration: none;
  font-size: ${props => props.theme.fontSize.md};
  font-weight: bold;
  svg {
    stroke: ${props => props.theme.colors.primary};
    fill: ${props => props.theme.colors.lightBlue};
  }
`;

const TextCell = styled.div`
  & > div {
    padding: 10px;
  }
`;

const UpperInfo = styled.div`
  padding: 0 24px;
  div {
    padding: 0 6px;
  }
`;

const UpperCell = styled.div`
  display: flex;
  & > div {
    display: flex;
  }
`;

const Labels = styled.div`
  display: flex;
  & > div {
    margin: 0 6px;
  }
`;

const LowerCell = styled.div`
  display: flex;
  margin: 0 48px;
  & > div {
    padding: 0 6px;
    color: ${props => props.theme.greyscale.label};
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export default Issues;
