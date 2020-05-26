import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'filterCoachesByTopic'
})
export class FilterCoachesByTopicPipe implements PipeTransform {

  transform(coaches: User[], topics: string[]): User[] {
    if (topics === null) {
      return coaches;
    }
    if (topics.length === 0) {
      return coaches;
    }
    return coaches.filter(coach => this.doesCoachHaveTopic(coach, topics));
  }

  doesCoachHaveTopic(user: User, topics: string[]): boolean {
    for (const topic of user.topics) {
      if (topics.includes(topic.name)) {
        return true;
      }
    }
    return false;
  }
}
