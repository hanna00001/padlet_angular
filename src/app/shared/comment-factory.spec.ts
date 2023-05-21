import { CommentFactory } from './comment-factory';

describe('CommentFactory', () => {
  it('should create an instance', () => {
    expect(new CommentFactory()).toBeTruthy();
  });
});
