import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const expandButtons = document.querySelectorAll('.expand_button');
  expandButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const selectedArticle = button.parentNode.parentNode.parentNode;
      const body = selectedArticle.querySelector('.article_body')
      if (button.innerText === 'V') {
        body.style.display = 'none';
        button.innerText = '>';
      } else {
        body.style.display = 'block';
        button.innerText = 'V'
      }
    })
  })
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const highlightButtons = document.querySelectorAll('.highlightBtn');
  highlightButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const selectedArticle = button.parentNode.parentNode;
      if (button.innerText === '+') {
        selectedArticle.classList.add('highlight')
        button.innerText = '-'
      } else {
        selectedArticle.classList.remove('highlight')
        button.innerText = '+'
      }
    })
  })
  
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
