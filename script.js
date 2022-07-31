/*
const nums = [1, 2, 3, 4, 5];
const ans = nums.map(item => {
    return item * 2
})

console.log(ans);     it gives the answer as  [2,4,6,8,10]
*/

const nums = [1, 2, 3, 4, 5];
Array.prototype.mymap = function (func) {   // 'mymap' function needs a callback function
    let arr = [];   // map function should return a separate array
    for (let i = 0; i < this.length; i++){  // for getting current item and this refers to our 'nums' array
        arr.push(func(this[i],i,this))   // we are pushing the the value that is returned from the function to the 'arr' beacause we have to return separate array, other than modifying the given array.
    }
    return arr;   // returning the array
}

const squareoparation = function (item, index, arr) {   // callback function of map function have three parameters, item, index, array
    return item * 2;   // returning the performed operation
}

console.log(nums.mymap(squareoparation))  // map function needs a callback function, so we are passing a callback function "squareoparation"

// it gives the answer as  [2,4,6,8,10]