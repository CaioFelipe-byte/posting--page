const form = document.querySelector('#form-post');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(post => {
    renderizadorTitulo.innerHTML = post.title;
    renderizadorConteudo.innerHTML = post.body;
  });
});

