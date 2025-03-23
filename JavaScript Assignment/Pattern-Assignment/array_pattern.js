// function Rightangle_Tringle(n){

//     for (let i = 0; i < n ; i++) {
//         let str = "";
//         for(j = 0; j <= i; j++){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// Rightangle_Tringle(5);

// function Reverse_Rightangle_Tringle(n){

//     for (let i = n; i >= 0 ; i--) {
//         let str = "";
//         for(j = 0; j <= i; j++){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// Reverse_Rightangle_Tringle(5);

// function Pyramid(n){

//     for (let i = 0; i < n ; i++) {
//         let str = "";
//         for(j = (n-i); j >= 0; j--){
//             str += " " 
//         }

//         for(j = 0; j <= i; j++){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// function pyramid(n){
//     for (let i = 1; i <=n ; i++){
//         row = ''
//         for(j = 0; j <n; j++){
//             if(j<n-i){
//                 row += " "
//             }
//             else{
//                 row += " "
//             }
//         }
//         console.log(row)
//     }
// }

// pyramid(5)
// function Pyramid(n){

//     for (let i = 0; i < n ; i++) {
//         let str = "";
//         let space =" "

//         for(j = (n-i); j >= 0; j--){
//             str += " " 
//         }

//         for(j = 0; j <= i; j++){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// Pyramid(5);

// if(i > n/2)
//     console.log(i)


// function Reverse_Pyramid(n){

//     for (let i = 0; i < n ; i++) {
//         let str = "";

//         for(j = (n-i); j > 0; j--){
//             str += " " 
//         }

//         for(j = 0; j <= i; j++){
//             str += "* "
//         }
//         console.log(str)
//     }

//     for (let i = 0; i < n-1 ; i++) {
//         let str = "";

        
//         for(j = 0; j <= i+1; j++){
//             str += " " 
//         }

//         for(j = (n-i-1); j > 0; j--){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// Reverse_Pyramid(5);


// function Number_pyramid(n){
//     for (let i = 1; i <=n ; i++){
//         row = ''
//         for(j = 0; j <n; j++){
//             if(j<n-i){
//                 row += " "
//             }
//             else{
//                 row += " "+i
//             }
//         }
//         console.log(row)
//     }
// }

// Number_pyramid(5)

// function Pascals_Triangle(){

//     for (let i = 1; i <=n ; i++){
//         row = ''
//         for(j = 0; j <n; j++){
//             if(j<n-i){
//                 row += " "
//             }
//             else{
//                 row += " "+i
//             }
//         }
//         console.log(row)
//     }

// }

let str = "5" - 5
// console.log(str)

//? </ -- ========== Start Hollow Square Section ========== -->

// function Hollow_Square(n){
//     for(i = 0; i < n ; i++){
//         let str = ""
        
//         for(j = 0; j < n ; j++){
//             if(i == 0 || i == n-1){
//                 str += "* "
//             }
//             else if(j == 0 || j == n-1){
//                 str += "* "
//             }
//             else{
//                 str += "  "
//             }
//         }
//         console.log(str)
//     }
// }

// Hollow_Square(5)
//? <!-- ========== End Hollow Square Section ========== -->

//? <!-- ========== Start Hourglass Section ========== -->

function Hourglass(n = a/2){
    for (let i = 0; i < n-1 ; i++){
        row = ''
            for(j = n; j > 0; j--){
                if(i > n-3 && j == n){
                    break
                }
                if(j < n-i)
                    row += " *"
                else{
                    
                    row += " "
                }  
            }
            if(i > n-3){
                break
            }
        console.log(row)
    }
    for (let i = 1; i < n ; i++){
        row = ''
            for(j = 0; j < n; j++){
                if(j < n-i){
                    row += " "
                }
                else{
                    row += " *"
                }
            }
        
        console.log(row)
    }
}
// Hourglass(7);


//? <!-- ========== End Hourglass Section ========== -->

//! <!-- ========== Start Zig Zag Pattern Section ========== -->

function printZigZag(n) {

    let rows = Array.from({ length: n }, () => []);
  

    let maxWidth = 5*n; 
  

    let row = 0;
    let down = true; 
  
    for (let i = 0; i < maxWidth; i++) {

      rows[row][i] = '*';
  
      if (down) {
        row++;
        if (row === n) {
          row -= 2;
          down = false;
        }
      } else {
        row--;
        if (row === -1) {
          row += 2; 
          down = true;
        }
      }
    }
  

    rows.forEach(row => {
      let output = "";
      for (let i = 0; i < maxWidth; i++) {
        output += row[i] ? row[i] : " ";
      }
      console.log(output);
    });
  }
  

//   printZigZag(5);

let rows = 5
let columns = 12



for (let i = 1; i <= rows; i++) {
    let output = '';
    

    for (let j = 1; j <= columns; j++) {

        if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
            output += '*';
        } else {
            output += ' ';
        }
    }

    console.log(output);
};
  

//! <!-- ========== End Zig Zag Pattern Section ========== -->




