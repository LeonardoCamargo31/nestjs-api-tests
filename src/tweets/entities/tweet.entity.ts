export type TweetProps = {
  content: string;
  screen_name: string;
};

export class Tweet {
  public content;
  public screen_name;

  constructor(props: TweetProps) {
    this.content = props.content;
    this.screen_name = props.screen_name;
  }
}
