var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {},  moviesElements),
    React.createElement('li', {},
      React.createElement('h2', {}, 'Harry Potter'),
      React.createElement('p', {}, 'Film o czarodzieju')
    ),
    React.createElement('li', {},
      React.createElement('h2', {}, 'Król Lew'),
      React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
  ),
  React.createElement('li', {},
  React.createElement('h2', {}, 'Gwiezdne wojny'),
  React.createElement('p', {}, 'opis')
),
React.createElement('li', {},
React.createElement('h2', {}, 'Milczenie owiec'),
React.createElement('p', {}, 'opis')
)
);

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  },
  {
    id: 3,
    title: 'Gwiezdne wojny',
    desc: 'opis'
  },
  {
    id: 4,
    title: 'Milczenie owiec',
    desc: 'opis'                        
  }
];
                         
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
    );
});

  ReactDOM.render(element, document.getElementById('app'));

 
