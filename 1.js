function dblarray (arr, callback) {
    const dbllarray = arr.map((num) => {
        return callback(num) ;
    })  ;
    return dbllarray ;
}

const originalarray = [3, 5, 7, 9];

function callback (num) {
    return num *2 ;
}
const dbllarray = dblarray (originalarray, callback) ;
console.log(dbllarray) ;





