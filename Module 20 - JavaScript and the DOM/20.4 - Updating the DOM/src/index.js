import "./styles.css";

/**
  Write the addheadings() function here
*/
function addHeadings() {
  const articles = document.querySelectorAll('article');
  for (let element of articles.values()) {
    element.innerHTML = `<h2>${element.innerText}</h2>`;
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll('article');
  for (let element of articles.values()) {
    element.innerText.includes('Tutorial') 
      ? element.classList.add('tutorial')
      : element.classList.add('article')
  }
};
/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  const tutorials = document.querySelectorAll('.tutorial');
  const articleSection = document.querySelector('section');
  const container = document.querySelector('.container');
  const newSection = document.createElement('section');
  newSection.classList.add('tutorials');
  if (articleSection.innerHTML.includes('Tutorial')) {
    container.appendChild(newSection);
    for (let element of tutorials) {
      articleSection.removeChild(element);
      newSection.innerHTML += `<article class="tutorial">${element.innerHTML}</article>`
    }
  }
};
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();