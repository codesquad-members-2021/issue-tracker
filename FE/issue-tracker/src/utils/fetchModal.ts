import { baseURL } from '@const/var';

type fetchModalType = {
  path: string;
  setState: (state: any) => void;
};

export const fetchModal = async ({ path, setState }: fetchModalType) => {
  const response = await fetch(`${baseURL}/${path}`);
  const json = await response.json();
  setState(json);
};
