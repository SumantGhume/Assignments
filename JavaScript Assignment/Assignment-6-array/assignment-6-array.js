// 1. Reverse an array manually
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("Reversed Array:", reverseArray([1, 2, 3, 4, 5])); 

// 2. Find the second-largest number in an array
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}
console.log("Second Largest:", secondLargest([10, 20, 5, 8, 20])); 

// 3. Merge two arrays without duplicates
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log("Merged Unique Array:", mergeUnique([1, 2, 3], [2, 3, 4, 5])); 

// 4. Find the frequency of each element in an array
function frequencyCount(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log("Frequency Count:", frequencyCount([1, 2, 2, 3, 3, 3, 4])); 


// 5. Implement a manual version of includes()
function manualIncludes(arr, target) {
    for (let item of arr) {
        if (item === target) return true;
    }
    return false;
}
console.log("Includes 3:", manualIncludes([1, 2, 3, 4, 5], 3)); 
console.log("Includes 6:", manualIncludes([1, 2, 3, 4, 5], 6)); 

// 6. Shift elements left by one position
function shiftLeft(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log("Shift Left:", shiftLeft([1, 2, 3, 4, 5])); 

// 7. Rotate an array to the right by k steps
function rotateRight(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log("Rotate Right by 2:", rotateRight([1, 2, 3, 4, 5], 2)); 

// 8. Remove all duplicate elements in an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 3, 4])); 

// 9. Create a 2D array representing a multiplication table (1 to 10)
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.log("Multiplication Table:", multiplicationTable());

// 10. Find the intersection of two arrays
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log("Intersection:", intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
