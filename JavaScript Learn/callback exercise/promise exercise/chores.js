
//Promises to return a value

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) { resolve("You walk the dog"); }
      else {
        reject("You DIDN'T walk the dog");
      }

    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const disheswashed = true;
      if (disheswashed) { resolve("You clean the kitchen"); }
      else {
        reject("You DIDN'T wash the dishes");
      }
    }, 2500);
  });

}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashtook = true;
      if (trashtook) { resolve("You take out the trash"); }
      else {
        reject("You DIDN'T take the trash out");
      }
    }, 500);
  });
}


//method chaining

walkDog().then(value => { console.log(value); return cleanKitchen() })
  .then(value => { console.log(value); return takeOutTrash() })
  .then(value => { console.log(value); console.log("You have finished all the chores!") })
  .catch(error => console.error(error));
