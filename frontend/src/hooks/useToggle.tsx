import { useEffect, useState } from 'react';
type CtrlModal = {
  toggle: any[];
  modal: any;
  init: boolean;
};
function useToggle({ toggle, modal, init }: CtrlModal): boolean {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!toggle) return;
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent): void => {
    const { target } = e;
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
  return open;
}
export default useToggle;
