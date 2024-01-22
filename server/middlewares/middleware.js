import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  console.log(req.headers);
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500; //if greater than 500 then it is google auth
    let userData;
    if (token && isCustomAuth) {
      userData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = userData?.id;
    } else {
      userData = jwt.decode(token);
      req.userId = userData?.sub;
    }
    next();
  } catch (error) {
    console.log(`Error occured in auth middleware:${error}`);
  }
};
