import { UserFactory } from './user-factory';

describe('UserFactory', () => {
  it('should create an instance', () => {
    expect(new UserFactory()).toBeTruthy();
  });
});
