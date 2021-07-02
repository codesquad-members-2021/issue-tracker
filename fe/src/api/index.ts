import axios from 'axios';
import { setInterceptors } from './interceptors';



function createInstanceWithAuth() {
	const instance = axios.create();
	return setInterceptors(instance);
}
export const instanceWithAuth = createInstanceWithAuth();