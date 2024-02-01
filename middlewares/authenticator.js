import jwtToken from "jsonwebtoken";

const authenticator = {
  admin: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token) {
        const isTokenVerified = await jwtToken.verify(
          token,
          process.env.JWTTOKENKEY
        );
        console.log("isTokenVerified : ", isTokenVerified);
        if (isTokenVerified.roleId === process.env.SUPER_ADMIN_ROLE_ID) {
          req.userData = isTokenVerified;
          next();
        } else {
          res.status(401).json({
            message: "Unauthorized!",
            err: null,
            data: isTokenVerified,
          });
        }
      } else {
        res.status(403).json({ message: "Token not provided!", err: null });
      }
    } catch (err) {
      res.status(403).json({ message: "Somthing wents wrong!", err: err });
    }
  },

  user: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token) {
        const isTokenVerified = await jwtToken.verify(
          token,
          process.env.JWTTOKENKEY
        );
        if (isTokenVerified) {
          req.userData = isTokenVerified;
          next();
        } else {
        }
      } else {
        res.status(403).json({ message: "Token not provided!", err: null });
      }
    } catch (err) {
      res.status(403).json({ message: "Somthing wents wrong!", err: err });
    }
  },
};

export default authenticator;
