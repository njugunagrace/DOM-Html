// Change document background color to silver
document.getElementById('container').style.backgroundColor='silver';

// Change the font color for h1 title tag to green
document.getElementById('title').style.color='green';

// Change the font case for h3 title tags to uppercase
// Get all the <h3> elements in the DOM
let tag = document.getElementsByTagName('h3');
for (let i = 0; i < tag.length; i++) {
    tag[i].style.textTransform = 'uppercase';
  }

//   Add one more fruit to the fruits list  
var fruList = document.getElementById('fruList');
var newFruit = document.createElement('li');
newFruit.textContent = 'Passion';
fruList.appendChild(newFruit);


// Add one more vegetable to the vegetables list
var vegList = document.getElementById('vegList');
var newVegetable = document.createElement('li');
newVegetable.textContent = 'Onions';
vegList.appendChild(newVegetable);
