import { environment } from 'src/environments/environment';

const domainUrl = `${environment.apiURL}`;

export const API_URLS = {
  GET_WORD_DEFINITION: (word: any) => `${domainUrl}${word}/definitions`,
};
