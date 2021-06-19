import { useEffect } from 'react';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { AtomType } from '@/utils/myRecoil/atom';

const useRecoilInput = <T>(atom: AtomType<T>) => {

  const [value, setValue] = useRecoilState(atom);

  const onChange = ({ target }: { target: HTMLInputElement }, fileData?: string) => {
    if (fileData) return setValue(value + fileData);
    setValue(target.value)
  }

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, []);

  return { value, onChange };
}

export default useRecoilInput;