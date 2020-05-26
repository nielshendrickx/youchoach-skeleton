import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'filterCoachByYear'
})
export class FilterCoachByYearPipe implements PipeTransform {

  transform(coaches: User[], years: number[]): User[] {
    if (years === null) {
      return coaches;
    }
    if (years.length === 0) {
      return coaches;
    }
    return coaches.filter(coach => this.doesCoachHaveYear(coach, years));
  }

  doesCoachHaveYear(user: User, years: number[]): boolean {
    for (const topic of user.topics) {
      for (const grade of topic.grade) {
        if (years.includes(grade.year)) {
          return true;
        }
      }
    }
    return false;
  }
}

