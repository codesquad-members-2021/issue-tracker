import React from "react";
import { Modal as S } from "../AtomicComponentsStyles";
import ModalCheckButton from "./ModalCheckButton";

type ModalItemProps = {
  data: any;
  index?: number;
};

const ModalItem = ({ data, index }: ModalItemProps) => {
  return (
    <S.ModalItemDiv>
      <span>{data}</span>
      <ModalCheckButton index={index} />
    </S.ModalItemDiv>
  );
};

export default ModalItem;
