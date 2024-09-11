import User from "../models/user.model.js";

export const SignUp = async (req, res) => {
  try {
    const { nickname, password } = req.body;

    if (!nickname || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const exisitingUSer = await User.findOne({ nickname });
    if (exisitingUSer) {
      return res.status(400).send({
        success: false,
        message: "Nickname already taken.",
      });
    }

    const user = await User.create({ nickname, password });

    return res.status(201).send({
      success: true,
      message: "Signup successfull",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      succes: false,
      message: `Error in SignUp API`,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { nickname, password } = req.body;

    if (!nickname || !password) {
      return res.status(400).send({
        message: "Please provide all fields",
        success: false,
      });
    }

    // Find user by nickname
    let user = await User.findOne({ nickname }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "Incorrect nickname or password.",
        success: false,
      });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = user.generateToken();

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        nickname: user.nickname,
      },
      token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in Login API",
    });
  }
};

// export const logout = async (req, res) => {
//   try {
//     res.clearCookie("token", {
//       httpOnly: true,
//       sameSite: "strict",
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Logged out successfully",
//     });
//   } catch (error) {
//     return res.status(500).send({
//       success: false,
//       message: "Error in Logout API",
//     });
//   }
// };
