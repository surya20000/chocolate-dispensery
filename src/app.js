var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
const helper = function (choclates , color , count) {
  for(let i =0; i<count; i++){
    choclates.unshift(color);
  }
};


function addChocolates (choclates , color , count) {
  return count<=0
  ?'Number cannot be zero/negative':
  helper(choclates, color, count);
}


//Progression 2: Remove z chocolates from the top the dispenser

const helperRemove = function (choclates , count) {
  var removedChoclates = [];
  while(count >0){
    removedChoclates.push(choclates.shift());
    count -=1
  }
  return removedChoclates
};

function removeChocolates(choclates, count) {
  const lengthofChocolatesStore = choclates.length;
  return count <= 0
  ? 'Number cannot be zero/negative'
  : lengthofChocolatesStore < count
  ? 'Insufficient chocolates in the dispenser'
  : helperRemove(choclates, count)
}

//Progression 3: Dispense z chocolates

const helperDispense = function (choclates, number) {
  const dispensedChoclates = [];
  while (number > 0) {
    number -= 1;
    dispensedChoclates.push(choclates.pop());
  }
  return dispensedChoclates;
};

function dispenseChocolates (choclates, number) {
  const lengthOfChoclatesStorre = choclates.length;
  return number <=0
  ?'Number cannot be zero/negative'
  :lengthOfChoclatesStorre < number
  ?'Insufficient chocolates in the dispenser'
  :helperDispense(choclates, number);
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(choclates, number, color) {
  return dispenseChocolates(choclates, number);
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const helperNoOfChoclates = function (choclates) {
  const ans = [];
  const refrenceChoclates = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink'
  ];
  refrenceChoclates.forEach((refChoclate) => {
    let counter = 0;
    choclates.forEach((chocolate) => {
      if (chocolate == refChoclate) {
        counter +=1;
      }
    });
    counter > 0 ? ans.push(counter) :null;
  });
  return ans;
};
function noOfChocolates(chocolates) {
  return helperNoOfChoclates(chocolates);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

const helperSortChoclates = function (choclates) {
  let ans = [];
  let store = {};
  choclates.sort();

  for(let i = 0; i < chocolates.length; i++) {
    let counter = 0;
    for (let j = 0; i < chocolates.length; j++) {
      if (choclates[i] == chocolates[j]) {
        counter +=1;
      }
    }

    store[chocolates[i]] = counter;
  }
  const sortable = Object.fromEntries(
    Object.entries(store).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((keys) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(keys);
    }
  });
  return ans;
};

function sortChocolateBasedOnCount(chocolates) {
  finalAns = helperSortChoclates(chocolates);
  return finalAns;
}

//Progression 7: Change z chocolates of x color to y color

const helperToChangeChocolateColor = function (
  chocolates,
  number,
  color,
  finalColor
) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
};

function changeChocolateColor(chocolates, number, color, finalColor) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : color == finalColor
    ? "Can't replace the same chocolates"
    : helperToChangeChocolateColor(chocolates, number, color, finalColor);
}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  const changedColor = helperToChangeChocolateColor(
    chocolates,
    chocolates.length,
    color,
    finalColor
  );
  counter = 0;
  changedColor.forEach((chocolate) => {
    chocolate == finalColor ? (counter += 1) : (counter += 0);
  });
  return color == finalColor
    ? "Can't replace the same chocolates"
    : [counter, changedColor];
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates, givenColor) {
  for (let index = 0; index < chocolates.length; index++) {
    if (chocolates[index] == givenColor) {
      position = index;
      break;
    }
  }
  chocolates.splice(position, 1);
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates) {
  const store = {};

  chocolates.forEach((chocolate) => {
    if (chocolate in store) {
      store[chocolate] += 1;
    } else {
      store[chocolate] = 1;
    }
  });

  countOfEachChocolate = Object.values(store);
  totalNumberOfRainbowChocolates = 0;
  countOfEachChocolate.forEach((count) => {
    if (count % 3 == 0) {
      totalNumberOfRainbowChocolates += count / 3;
    }
  });
  return totalNumberOfRainbowChocolates;
}