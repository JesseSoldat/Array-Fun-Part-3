var anchor = document.getElementById('anchor');

var people = [ 
  ['Joe', 'Marks', 36, 'France'],
  ['Kate', 'King', 46, 'Germany'],
  ['Ivan', 'Bowers', 27, 'Australia'],
  ['Peter', 'Fisher', 39, 'United States'],
  ['Chad', 'Nelly', 24, 'Russia'],
  ['Mandy', 'Woods', 41, 'Canada']
];



for(var i = 0; i < people.length; i++) {
  var li = document.createElement('li');
  var text = document.createTextNode(people[i][0]);
  li.appendChild(text);
  anchor.appendChild(li);


}