import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';

interface CtrlModal {
  toggle: RefObject<HTMLDivElement>[];
  modal: RefObject<HTMLDivElement>;
}

interface toggleReturnType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function useToggle({ toggle, modal }: CtrlModal): toggleReturnType {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!toggle) return;
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent): void => {
    const target = e.target as HTMLDivElement;
    const toggleTarget = toggle.map((el: any) => el.current);
    const ModalTarget = modal.current;
    if (toggleTarget[0]) {
      for (const element of toggleTarget) {
        if (element.contains(target)) {
          setOpen((open) => !open);
          return;
        }
      }
      if (ModalTarget?.contains(target)) setOpen(true);
      else setOpen(false);
    }
  };
  return { open, setOpen };
}
export default useToggle;
