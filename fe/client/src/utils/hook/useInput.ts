import { useState, useEffect } from 'react';

const useInput = (initialState = '') => {
  const [value, setValue] = useState(initialState);
  const onChange = ({ target }: { target: HTMLInputElement }, colorData?: string) => {
    if (colorData) return setValue(colorData);
    setValue(target.value)
  }

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, []);

  return { value, onChange };
}

export default useInput;