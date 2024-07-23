function getRandomArticles(data, count) {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySuggestedArticles(articles) {
  const suggestedContainer = document.getElementById('suggested');
  suggestedContainer.innerHTML = ''; // Clear any existing content

  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('suggested-article');

    articleElement.innerHTML = `
      <a href="${article.url}">
        <h3>${article.title}</h3>
        <p>${article.subtitle}</p>
        <small>${article.datePublished}</small>
      </a>
    `;

    suggestedContainer.appendChild(articleElement);
  });
}

function displayNextArticle(articles, nextKey) {
  const suggestedContainer = document.getElementById('next');
  suggestedContainer.innerHTML = ''; // Clear any existing content

  // Find the article with the specified key
  // const article = articles.find(article => article.url === nextKey);

  let article = null;

  for (var i = 0; i < articles.length; i++) {
    console.log(articles[i].url,"---",nextKey);
    if (articles[i].url == nextKey) {
      article = articles[i];
    }
  }

  if (article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('suggested-article');

    articleElement.innerHTML = `
      <a href="${article.url}">
        <h3>${article.title}</h3>
        <p>${article.subtitle}</p>
        <small>${article.datePublished}</small>
      </a>
    `;

    suggestedContainer.appendChild(articleElement);
  } else {
    // Optional: Handle the case where no article matches the key
    suggestedContainer.innerHTML = '';
    nextWrapper.style.display = "none";
  }
}

fetch('./json/metadata.json')
  .then(response => response.json())
  .then(data => {
    const randomArticles = getRandomArticles(data, 5);
    displaySuggestedArticles(randomArticles);
    const nextKey = next.getAttribute('data-next');
    displayNextArticle(data,nextKey);
  })
  .catch(error => console.error('Error loading metadata:', error));
