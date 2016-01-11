var details = document.getElementById('details');
var married = document.getElementById('married');
var birthday = document.getElementById('birthday');
//Client Info
var people = [ 
  ['Joe', 'Marks', 36, 'France', [true, 'Male'] ],
  ['Kate', 'King', 46, 'Germany', [true, 'Female'] ],
  ['Ivan', 'Bowers', 27, 'Australia', [false, 'Male'] ],
  ['Peter', 'Fisher', 39, 'United States', [true, 'Male'] ],
  ['Chad', 'Nelly', 24, 'Russia', [false, 'Male'] ],
  ['Mandy', 'Woods', 41, 'Canada', [true, 'Female'] ]
];
//Client Details
function clientInfo() {
  for(var i = 0; i < people.length; i++) {
    var li = document.createElement('li');
    var newLine = document.createElement('br');
    var text = document.createTextNode(people[i][0]+' '+people[i][1]+' is from '+people[i][3]+'.');
    li.appendChild(text);
    details.appendChild(li);
    details.appendChild(newLine);
  }

}
clientInfo();
//Married
for(var i = 0; i < people.length; i++) {

  var li = document.createElement('li');
  var text = document.createTextNode(people[i][0]);
  li.appendChild(text);

  if(people[i][4][0]) {
    var isMarried = document.createTextNode(' is married');
    li.appendChild(isMarried);
  } else {
    var notMarried = document.createTextNode(' is not married');
    li.appendChild(notMarried);
  }
  var newLine = document.createElement('br');
  married.appendChild(li);
  married.appendChild(newLine);
}
//Update Birthday
function updateBirthday(user, info) {
  var gender;

  for(var i = 0; i < people.length; i++) {

    if(people[i][4][1] === 'Male') {
      gender = ' He ';
    }
    else {
      gender = ' She ';
    }

    if(people[i][0] === user) {
      var update = people[i][2] = info;
      birthday.innerHTML += 'Today is '+user+'\'s birthday. '+gender+' just turned '+update+'. Congratulations '+user+'.'+'<br><br>';
    } 
  }
}
updateBirthday('Kate',47);
updateBirthday('Chad',25);



