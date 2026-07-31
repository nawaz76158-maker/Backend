const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2. Normalize email and check if user already exists
    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // 3. Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 4. Create user record
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // 5. Send success response (excluding sensitive data)
    return res.status(201).json({
      message: "User created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      message: "Internal server error during signup",
    });
  }
};

const login = async (req, res) => {
try {
    const { email, password } = req.body;
    if (!email || !password) {
    return res.status(400).json({
        message: "Email and password are required"
    });
}

const normalizedEmail = email.toLowerCase().trim();

const user = await User.findOne({
    email: normalizedEmail
});

if(!user){
  return res.status(401).json({
    message: "Invalid email or password"
  })
}
 
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    return res.status(401).json({
        message: "Invalid email or password"
    });
}

const token = jwt.sign(
    {
        userId: user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
);
 return res.status(200).json({
  message: "Login successful",
  token,
  data: {
    id: user._id,
    name: user.name,
    email: user.email
  }
});

} catch (error) {
  console.error(error);

  res.status(500).json({
    message: "Error logging in"
  });
 }
};

module.exports = { 
  signup,
   login 
};