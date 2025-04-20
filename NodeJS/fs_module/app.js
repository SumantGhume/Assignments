// const sass = require('gulp-sass')(require('sass'));

// const http = require('http')

// const os = require('os')

// // import os from 'os';
// // import path from 'path';

// const path = require('path')
// const fs = require('fs');

// // import { createServer } from 'http';
// // import { dirname } from 'path';

// // const path = require('path');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"document"})
//     res.write("Welcome to mern stack. ")
//     res.end("Hello sumant!... you have created node server.")
// })

// const port =  8000;

// console.log("memory: ", os.totalmem()) 
// console.log("Platform: ", os.platform()) 
// console.log("Free memory: ", os.freemem()) 
// console.log("memory: ", os.totalmem()) 

// console.log(__dirname);
// const file_1 = path.join(__dirname,"batch42.text")
// fs.writeFileSync(file_1,'this file is created..',(e)=>{
//     if(e) throw e;
//     console.log("file create")
//     // fs.readFileSync(file_1, 'utf8', (err, data) => {
//     //     if (err) {
//     //       console.error(err);
//     //       return;
//     //     }
//     //     console.log(data);
//     //   });
    
// })

// fs.readFile('batch42.text', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// fs.appendFile('batch42.text', 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Content data added.");
// });

// // const fs = require('fs');
// fs.rename('batch42.text', 'new_file.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed successfully!');
// });
// fs.unlink('new_file.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully!');
// });



// //End
// server.listen(port,()=>{
//     console.log(`Server is runing... http://localhost:${port}`);
// })

const colors = require('colors');

console.log("welcom wisdom sprouts!....")

const express = require('express')

const app = express();

port  = 7000;

app.get('/api', (req,res)=>{
  res.status(202).send({message:"server running sucess",greet:"Hello user",success:true})
})

app.get



app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`.rainbow);
});


// http:/localhost:7000/api