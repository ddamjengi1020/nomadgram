import passport from "passport";
import JwtStrategy from "passport-jwt";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = (payload, done) => {
  try {
  } catch (error) {}
};

passport.use(new JwtStrategy(jwtOptions, verifyUser));
