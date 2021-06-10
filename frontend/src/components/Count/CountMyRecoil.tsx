
import {useEffect} from 'react';
import {Atom, useRecoilState, useRecoilValue, useSetRecoilState} from '../../lib/MyRecoil/MyRecoil';


const CountMyRecoil = () => {
  const newAtom = Atom<string|number>({
    key: "key",
    default: 1
  });
  
  const [count, setCount] = useRecoilState(newAtom);
  const setCountUseSetRecoilState = useSetRecoilState(newAtom);

  useEffect(() => {
    console.log("CountMyRecoil", count)
  }, [count.default])

  return (
    <div>
        <h2>읽기 쓰기 카운트 컴포넌트</h2>
        <p>카운트 {count.default}</p>
        <button onClick={() => setCount(count.default + 1)}>숫자 증가</button>
        <button onClick={() => setCount(count.default - 1)}>숫자 감소</button>
        <button onClick={() => setCountUseSetRecoilState(count.default + 1)}>숫자 증가2</button>
        <button onClick={() => setCountUseSetRecoilState(count.default - 1)}>숫자 감소2</button>
    </div>

  );
}

export default CountMyRecoil
