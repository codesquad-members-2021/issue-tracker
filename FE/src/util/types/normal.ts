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

export type { TChildren, TMouseEvent };
