
function grades(value) {
    if (value >= 70) {
        return "First Class";
    }   else if (value >= 60) {
        return "Higher Second Class";
    }   else if (value >= 50) {
        return "Lower Second Class";
    }   else if (value >= 40) {
        return "Third Class";
    }   else {
        return "Failed";
    }
} 

console.log(grades(90));
console.log(grades(55));
console.log(grades(40));
console.log(grades(39));