// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const clear = (drumArrayName) => {
  //console.log('***CLEAR***');
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  }
};

const toggleDrum = (drumArrayName, index) => {
  console.log('***toggleDrum***');
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  }
  swap(drums,index);
  //console.log('l1= '+ drums[index]);
  //if (!drums[index]) {
  //  drums[index] = true;
  //console.log('???');
  //} else {
  //  drums[index] = false;
    //console.log('!!!!');
//  }
  //console.log('l2= '+ drums[index]);
};

const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return;
  }
  for (let i = 0; i < drums.length; i++) {
    swap(drums,i);
  }
};

const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
};

const swap=(drums,i)=>{
  if (!drums[i]) {
    drums[i] = true;
    //console.log('???');
  } else {
    drums[i] = false;
      //console.log('!!!!');
  }
    //drums[i] = !drums[i];
};

const getNeighborPads = (x, y, size) => {
  const neighborPads = [];
  if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
    return neighborPads;
  }
  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    });
  });
};
