import {Topic} from './topic';

export interface UpdateUser {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  pictureUrl: string;
  topics: Topic[];
}
