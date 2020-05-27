import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'filterCoachesByName'
})
export class FilterCoachesByNamePipe implements PipeTransform {

  transform(coaches: User[], searchText: string): User[] {
    if (typeof searchText === 'undefined') {
      return coaches;
    }
    if (searchText.length <= 3) {
      return coaches;
    }
    return coaches.filter(coach => this.doesFullNameCoachStartsWithSearchText(coach, searchText));
  }

  doesFullNameCoachStartsWithSearchText(user: User, searchText: string): boolean {
      return user.firstName.toLowerCase().trim().startsWith(searchText.toLowerCase().trim())
        || user.lastName.toLowerCase().trim().startsWith(searchText.toLowerCase().trim());
  }
}
