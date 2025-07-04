import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

const auth = (req, res,next) => {
  console.log("This is headers*****", req.headers);
  
    const tokenBearer = req.headers.authorization;
    console.log(tokenBearer, "Token with Bearer");
    if (!tokenBearer?.startsWith("Bearer ")) {
      res.send({ message: "Invalid authorization header" });
    }
    let token = tokenBearer.split(" ");
    token = token[1];
    console.log(token);


  let decoded = jwt.verify(token,process.env.SECREATE_KEY)
  console.log(decoded)
  req.user = decoded   //{id:decoded.id,isADmin:decoded.isAdmin}

  next();
};

export default { auth };
