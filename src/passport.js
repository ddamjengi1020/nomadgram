import passport from "passport";
import JwtStrategy from "passport-jwt";
import dotenv from "dotenv";
import path from "path";
import { PrismaClient } from "@prisma/client";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const prisma = new PrismaClient();

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user.findOne({ where: { id: payload.id } });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

passport.use(new JwtStrategy(jwtOptions, verifyUser));
