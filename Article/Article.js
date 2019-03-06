// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
// console.log(articles);
articles.forEach(function(article) {
  return new Article(article);
});

TweenMax.to(".expandButton", 2, { x: 300, rotation: 360, scale: 0.5 });

TweenMax.to(".date", 3, { x: 300 });

TweenLite.to(".article", 2, {
  backgroundColor: "#DCDCDC",
  width: "70%",
  top: "50px",
  ease: Power2.easeInOut
});

// CustomWiggle.create("funWiggle", { wiggles: 10, type: "anticipate" });
// TweenMax.to(".headerLambda", 2, { rotation: 30, ease: "funWiggle" });
TweenMax.from(".headerLambda", 2, { y: -200, ease: "myBounce" });
