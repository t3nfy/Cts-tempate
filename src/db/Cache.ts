import { Redis, RedisOptions } from "ioredis";

export default class Cache extends Redis {
  constructor(private redisURL: string) {
    super(redisURL, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
      showFriendlyErrorStack: true,
    } as RedisOptions);
  }

    // other functions

}
