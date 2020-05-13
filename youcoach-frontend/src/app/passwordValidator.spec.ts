import { PasswordValidator } from './must-match.validators';

describe('Passwordvalidator', () => {
  it('should create an instance', () => {
    expect(new PasswordValidator()).toBeTruthy();
  });
});
