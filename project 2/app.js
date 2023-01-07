
let data = [
   {
   name: 'Eugenia',
   age: '59'
   
},
   {
   name: 'Anna',
   age: '19'

   },
   {
   name: 'Nicolai',
   age: '22'
   },
   {
   name: 'Pavel',
   age: '33'
   },
   {
   name: 'Nastea',
   age: '29'
   },
   {
   name: 'Daniel',
   age: '03'}

];
const info = document.querySelector('#info');
let details = data.map(function(item)  {
   return '<div>' + item.name +  '' +  ' is ' +  item.age +  ' years old' + '</div>';
   
})
info.innerHTML = details.join('\n');

