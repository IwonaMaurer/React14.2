

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 3,
    title: 'Gwiezdne wojny',
    desc: 'opis',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 4,
    title: 'Milczenie owiec',
    desc: 'opis',
    src: 'http://imgur.com/n8OYCzR.png'                     
  }
];



var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
  React.createElement('img', {src: movie.src})
    );
});
var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);
  ReactDOM.render(element, document.getElementById('app'));

 

 
