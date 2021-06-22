// ** 일반 Interface & Type 정의

type TChildren =
  | React.ReactNode
  | React.ReactChild
  | React.ReactChild[]
  | React.ReactChildren
  | React.ReactChildren[]
  // Material 전용
  | NonNullable<React.ReactNode>
  | {};
// --

type TMouseEvent = (e: React.MouseEvent<HTMLElement>) => void;
type TFilterTypes = 'search' | 'assignee' | 'label' | 'milestone' | 'writer';

export type { TChildren, TMouseEvent, TFilterTypes };
