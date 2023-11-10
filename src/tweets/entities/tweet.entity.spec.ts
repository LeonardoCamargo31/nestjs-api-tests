import { Tweet, TweetSchema } from './tweet.entity';
import mongoose from 'mongoose';

describe('Tweets Tests', () => {
  describe('Tweet Class', () => {
    it('should create a tweet', () => {
      const tweet = new Tweet({
        content: 'Hello World',
        screen_name: 'Leonardo Camargo',
      });

      expect(tweet.content).toBe('Hello World');
    });
  });

  describe('Using MongoDB', () => {
    let conn: mongoose.Mongoose;

    beforeEach(async () => {
      conn = await mongoose.connect(
        `mongodb://root:root@db:27017/tweets_entity_test?authSource=admin`,
      );
    });

    afterEach(async () => {
      await conn.disconnect();
    });

    it('should create a tweet document', async () => {
      const TweetModel = conn.model('Tweet', TweetSchema);
      const tweet = new TweetModel({
        content: 'Hello World',
        screen_name: 'Luiz Carlos',
      });
      await tweet.save();

      const tweetCreated = await TweetModel.findById(tweet._id);

      expect(tweetCreated.content).toBe('Hello World');
      expect(tweetCreated.screen_name).toBe('Luiz Carlos');
    });
  });
});
