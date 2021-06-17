import React, { useState, useEffect } from 'react';

import jwtDecode from 'jwt-decode';

interface TokenProps {
  name: string;
  profileImageUrl: string;
}

const useToken = (): TokenProps | undefined => {
  const token = localStorage.getItem('token');
  console.log('useTOken안', token);
  const [decodedToken, setDecodedToken] = useState<TokenProps | null>(null);
  console.log('deocdedTOke n', decodedToken);
  //     useEffect(() => {
  //         const decoded = token && jwtDecode<TokenProps>(token);
  //   decoded && setDecodedToken(decoded);
  //     },[token])
  if (!decodedToken) return;

  return decodedToken;
};

export default useToken;
