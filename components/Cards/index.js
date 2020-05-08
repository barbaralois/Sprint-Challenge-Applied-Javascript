// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const articleEntry = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    let topics = response.data.articles;
    let indiTopics = Object.keys(topics);
    for (let i = 0; i < indiTopics.length; i++) {
      topics[indiTopics[i]].forEach((article) => {
        let newArticle = createCard(article);
        articleEntry.appendChild(newArticle);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Article GET request completed');
  });

function createCard(articleData) {
  let { headline, authorPhoto, authorName } = articleData;
  const card = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const author = document.createElement('span');

  card.appendChild(headlineDiv);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorContainer.appendChild(author);

  card.classList.add('card');
  headlineDiv.classList.add('headline');
  authorContainer.classList.add('author');
  imgContainer.classList.add('img-container');

  headlineDiv.textContent = headline;
  image.src = authorPhoto;
  author.textContent = `By ${authorName}`;

  return card;
}
