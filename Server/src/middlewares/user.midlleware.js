import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).send({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).send({
        message: "Invalid token",
        success: false,
      });
    }
    req.user = { id: decode._id };
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in authentication middleware",
    });
  }
};

export default isAuthenticated;
