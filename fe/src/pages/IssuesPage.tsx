import Wrapper from 'components/Issues/Issues';
import Navbar from 'components/navbar/Navbar';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { decodedUserDataAtom } from 'stores/userStore';
import decode from 'jwt-decode';
import { DecodedUserDataType } from 'types/storeTypes';

const IssuesPage = () => {
  const [decodedUserData, setDecodedUserData] =
    useRecoilState(decodedUserDataAtom);
  const jwt = localStorage.getItem('jwt');
  const history = useHistory();

  if (jwt) {
    if (!decodedUserData) {
      const { avatar_url, name, id } = decode<DecodedUserDataType>(jwt);
      setDecodedUserData({
        avatar_url,
        name,
        id,
      });
    }
  } else {
    // 로그인 페이지로
    history.push('/');
  }

  return (
    <>
      <Navbar />
      <Wrapper />
    </>
  );
};

export default IssuesPage;
