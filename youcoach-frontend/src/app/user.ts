import {Topic} from './topic';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordAgain: string;
  pictureUrl: string;
  role: string;
  introduction: string;
  availability: string;
  topics: Topic[];
}
