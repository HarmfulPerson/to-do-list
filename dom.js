var ulList = document.getElementById("items");
var ulList1 = document.getElementById("itemsDone");
var temp = ulList.children;
var temp1 = ulList1.children;
var blankSpace = document.createTextNode("");

function check() {
  if (ulList.length == 0) {
    console.log(2);
  } else if (ulList1.length == 0) {
    console.log(1);
  } else {
    console.log(3);
  }
}


ulList.addEventListener('click', removeItem);
ulList.addEventListener('click', doneItem);
ulList1.addEventListener('click', RemoveDoneItem);



document.getElementById("form").addEventListener('submit', function addItem(e) {
  e.preventDefault(e);
  var textValue = document.getElementById('button').value;
  var ulList = document.getElementById("items");
  var newItem = document.createElement('li');
  newItem.classList.add('list-group-item');

  var passedValue = document.createTextNode(textValue);
  newItem.appendChild(passedValue);
  ulList.appendChild(newItem);

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-primary-spacing btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode('X'));
  newItem.appendChild(deleteButton);

  var doneButton = document.createElement("button");
  doneButton.className = "btn btn-primary-spacing btn-outline-success btn-sm float-right done";
  doneButton.appendChild(document.createTextNode('Done'));
  newItem.appendChild(doneButton);
});

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    itemList = document.getElementById('items');
    itemListDone = document.getElementById('itemsDone');
    itemList.removeChild(li);
    //itemListDone.removeChild(li);
  }
}

function RemoveDoneItem(e) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    itemList = document.getElementById("itemsDone");
    itemList.removeChild(li);

  }
}


function doneItem(e) {
  if (e.target.classList.contains('done')) {
    e.target.className = "btn btn-light btn-primary-spacing float-right btn-sm";
    var li = e.target.parentElement;
    itemList = document.getElementById('itemsDone');
    textmassage = document.createTextNode(" - You've done it!");
    li.appendChild(textmassage);
    itemList.append(li);

  }

}
