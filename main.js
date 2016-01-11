var anchor = document.getElementById('anchor');

var people = [ 
  ['Joe', 'Marks', 36, 'France', [true, 'Male'] ],
  ['Kate', 'King', 46, 'Germany', [true, 'Female'] ],
  ['Ivan', 'Bowers', 27, 'Australia', [false, 'Male'] ],
  ['Peter', 'Fisher', 39, 'United States', [true, 'Male'] ],
  ['Chad', 'Nelly', 24, 'Russia', [false, 'Male'] ],
  ['Mandy', 'Woods', 41, 'Canada', [true, 'Female'] ]
];



for(var i = 0; i < people.length; i++) {

  var li = document.createElement('li');
  var text = document.createTextNode(people[i][0]);
  li.appendChild(text);

  if(people[i][4][0]) {
    var married = document.createTextNode(' is married');
    li.appendChild(married);
  } else {
    var notMarried = document.createTextNode(' is not married');
    li.appendChild(notMarried);
  }
  var newLine = document.createElement('br');
  anchor.appendChild(li);
  anchor.appendChild(newLine);




}