import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path"; // ✅ Missing import added

const router = express.Router();

router.post("/admin_login", (req, res) => {
  console.log(req.body);
  const sql = "SELECT * from admin Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "5d" }
      );
      res.cookie("token", token);
      console.log(token)
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, Result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    return res.json({ Status: true, Result: Result });
  });
});

router.post("/add_category", (req, res) => {
  console.log(req.body);
  const sql = "INSERT INTO category (name) VALUES (?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    return res.json({ Status: true });
  });
});

//! Upload Image Start
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
//! Upload Image End

router.post('/add_employee', upload.single('image'), (req, res) => {
  const sql = `INSERT INTO employee 
    (name,email,password, address, salary,image, category_id) 
    VALUES (?)`;

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });

    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.file.filename,
      req.body.category_id
    ];

    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });
});


router.get("/employee", (req, res) => {
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, Result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    return res.json({ Status: true, Result: Result });
  });
});

router.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const sql = "SELECT * FROM employee WHERE id = ?";
  con.query(sql,[id], (err, Result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    return res.json({ Status: true, Result: Result });
  
  });
});

router.post("/edit_employee/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  console.log("ID: ", id);
  console.log("BODY: ", req.body);
  console.log("FILE: ", req.file);

  let image = req.body.existingImage; // fallback to previous image if not replaced
  if (req.file) {
    image = req.file.filename; // if new image uploaded, use it
  }

  const sql = `
    UPDATE employee 
    SET name=?, email=?, salary=?, address=?, category_id=?, image=? 
    WHERE id = ?`;

  const values = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.address,
    req.body.category_id,
    image,
    id,
  ];

  con.query(sql, values, (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/total_count/', (req, res) =>{
  const sql = `SELECT 
  (SELECT COUNT(*) FROM admin) AS total_admins,
  (SELECT COUNT(*) FROM employee) AS total_employees,
  (SELECT SUM(salary) FROM employee) AS total_salary;
`;
  con.query(sql, (err, Result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    console.log("The total is: ",Result)
    return res.json({ Status: true, Result: Result });
  
  });
})

router.get('/admin_records/', (req, res) =>{
  const sql = 'SELECT * FROM admin';
  con.query(sql, (err, Result) => {
    if (err) return res.json({ Status: false, Error: "Query error" });
    console.log("The total is: ",Result)
    return res.json({ Status: true, Result: Result });
  
  });
})

router.get('/logout', (req, res) =>{

    res.clearCookie('token')
    return res.json({ Status: true });
  
})


export { router as adminRouter };
