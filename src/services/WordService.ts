import { ResponseModel } from '../types';
import { API_DICTIONARY_URL } from './base';
import axios, { AxiosResponse } from 'axios';

export const find = async (word: string): Promise<AxiosResponse<ResponseModel[]>> =>
	await axios.get<ResponseModel[]>(`${API_DICTIONARY_URL}/${word}`);