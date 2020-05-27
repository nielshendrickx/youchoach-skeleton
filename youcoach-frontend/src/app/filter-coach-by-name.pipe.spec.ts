import { FilterCoachesByNamePipe } from './filter-coach-by-name.pipe';

describe('FilterCoachFirstNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCoachesByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
