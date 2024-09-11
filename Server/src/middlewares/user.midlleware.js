import JWT from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
