const quotesArray = [
  {
    name: "Stephen King",
    quote:
      "I try to create sympathy for my characters, then turn the monsters loose."
  },
  {
    name: " Ernest Hemingway",
    quote: "Prose is architecture, not interior decoration."
  },
  {
    name: "Herman Melville",
    quote: "To produce a mighty book, you must choose a mighty theme.."
  },
  {
    name: "C. J. Cherryh",
    quote:
      "It is perfectly okay to write garbage—as long as you edit brilliantly."
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteDesc = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotesArray.length);

  quoteDesc.innerHTML = quotesArray[number].quote;

  quoteAuthor.innerHTML = quotesArray[number].name;
}
