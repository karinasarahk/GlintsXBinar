let kitchen = ["sugar", "flour", "eggs", "tomato"];

function checkIndomie() {
  if (kitchen.includes("indomie goreng" || "indomie rebus")) {
    console.log("indomie available");
    prepareIndomie();
  } else {
    console.log("indomie not available");
    buyIndomie();
  }
}

function buyIndomie(mie) {
  mie="indomie rebus";
  kitchen.push(mie);  
  console.log("go to market buy indomie");
  prepareIndomie();
}

function prepareIndomie() {
  console.log("Prepare indomie");
  console.log("Boil Water");
  console.log("put noodles into water");
  console.log("put season in bowl");
  indomieType();
}

function indomieType() {
  if (kitchen.includes("indomie goreng")) {
    console.log("drain water");
    console.log(kitchen[kitchen.length-1]);
    putNoodles();
  } else {
    console.log(kitchen[kitchen.length-1]);
    putNoodles();
  }
}

function putNoodles() {
  console.log("Put noodles into bowl");
  console.log("mix noodles with season");
  console.log("Delicious Noodles !!");
}

checkIndomie();