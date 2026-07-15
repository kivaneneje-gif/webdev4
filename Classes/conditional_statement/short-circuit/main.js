//logical AND (&&)

let age =10;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("permission Granted");
}else{
    console.log('permission Denied')
}

//logical OR (||)

let isTeacher = false;
let isAdmin = true;

if (isTeacher || isAdmin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//combining And and OR
let old = 20;
let hasIP = true;
let isStudent = false;

if ((age >= 18 && hasID) || isStudent) {
    console.log("Access Granted");
}