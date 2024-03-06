function manipulateString (inputString, callback) {
    const manipulatedString = inputString.toUpperCase() ;
    callback (manipulatedString);
}

function logString(manipulatedString) {
    console.log(`The Manipulated String Is : ${manipulatedString}`) ;

}

manipulateString("pickey blinder", logString) ;