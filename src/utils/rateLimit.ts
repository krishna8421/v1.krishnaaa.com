import { NextApiResponse } from "next";
import LRU from "lru-cache";

interface RateLimitConfig {
  interval: number;
  uniqueTokenPerInterval: number;
}

export const rateLimit = (config: RateLimitConfig) => {
  const tokenCache = new LRU({
    max: config.uniqueTokenPerInterval || 100,
    maxAge: config.interval || 60000,
  });

  return {
    check: async (res: NextApiResponse, limit: number, token: string) => {
      const tokenCount = tokenCache.get(token) || [0];
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }
      tokenCount[0] += 1;

      const currentUsage = tokenCount[0];
      const isRateLimited = currentUsage > limit;
      res.setHeader("X-RateLimit-Limit", limit);
      res.setHeader("X-RateLimit-Remaining", isRateLimited ? 0 : limit - currentUsage);
      return isRateLimited;
    },
  };
};
