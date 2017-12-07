

var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements),
  React.createElement('img', {src: this.props.image.src})
);


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
      desc: 'Ostatni Jedi',
      src: 'http://imgur.com/n8OYCzR.png'
    },
    {
      id: 4,
      title: 'Morderstwo w Orient Expressie',
      desc: 'film kryminalny',
      src: 'http://imgur.com/n8OYCzR.png'
    }
  ];


  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {}, movie.src)
      );
  });
  ReactDOM.render(element, document.getElementById('app'));

 