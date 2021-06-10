import React, { useState } from 'react';

const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};

export default useModal;
