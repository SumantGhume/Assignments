import express, { response } from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

const router = express.Router();

router.post("/employee_login", (req, res) => {
  console.log(req.body);
  const sql = "SELECT * from employee Where email = ? ";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
        if (err)
          return res.json({ loginStatus: false, Error: "Wrong Password" });
        if (response) {
          const email = result[0].email;
          const token = jwt.sign(
            { role: "employee", email: email, id: result[0].id },
            "jwt_secret_key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true ,id:result[0].id});
        }
      });

      
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

router.get('/detail/:id', (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM employee WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ Status: false, Error: "Query failed" });
    }

    if (result.length === 0) {
      return res.status(404).json({ Status: false, Error: "Employee not found" });
    }

    res.json({ Status: true, 0: result[0] }); // or just: res.json({ Status: true, employee: result[0] });
  });
});


 router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
  })

export { router as employeeRouter };
