console.clear ();

/* DON'T CHANGE */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
   for (let i = 0; i < randomNumber; i++) {
     data.push(createArrayElement())
   }
 
   // Recursive
   if (data.length == 0) {
     createArray();
   }
 }
 
 function createArrayElement() {
   let random = Math.floor(Math.random() * 1000);
 
   return [null, random][Math.floor(Math.random() * 2)]
 }  
 createArray()
 console.log(data);
 /*
* Code Here!
* */
 
 function clean(data) {

 filtered = data.filter(el => el != null);
 console.log(filtered);
 }
 console.log(clean(data));


/*
* DON'T CHANGE
* */

if (process.argv.slice(2)[0] == "test") {
 try {
   clean(data).forEach(i => {
     if (i == null) {
       throw new Error("Array still contains null")
     }
   })
 }
 catch(err) {
   console.error(err.message);
 }
}
