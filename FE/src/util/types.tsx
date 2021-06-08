export type TChildren =
  | React.ReactNode
  | React.ReactChild
  | React.ReactChild[]
  | React.ReactChildren
  | React.ReactChildren[]
  // Material 전용
  | NonNullable<React.ReactNode>
  | {};
  // --

export type TMouseEvent = (e: React.MouseEvent<HTMLElement>) => void;
