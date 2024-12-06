import { Redis } from "ioredis";
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log(`Redis connected`);
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection failed");
};

export const redis = new Redis({
  username: "default",
  password: "wvemkUEAN1u1o39jQM5nrOAtN2ZujxR8",
  host: "redis-19742.c256.us-east-1-2.ec2.redns.redis-cloud.com",
  port: 19742,
});
