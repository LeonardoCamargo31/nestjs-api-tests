import { Tweet } from './tweet.entity';

describe('Tweets Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Leonardo Camargo',
    });

    expect(tweet.content).toBe('Hello World');
  });

  it('should create a tweet document', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Leonardo Camargo',
    });

    expect(tweet.content).toBe('Hello World');
  });
});
