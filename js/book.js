const cards = document.querySelector(".cards");
const rest = document.querySelector('.reset')
let newArray = JSON.parse(localStorage.getItem("cards")) || [];

function renderBooks() {
  cards.innerHTML = "";

  newArray.forEach((book) => {
    cards.innerHTML += `
      <div class="card">
        <h2>${book.bookName}</h2>
        <h4>${book.bookAfter}</h4>
        <p>${book.bookPaper} bet</p>
        <p>${book.bookPaperSort}</p>
        <img src="${book.bookImage}" alt="Book Image">
      </div>
    `;
  });
}

rest.addEventListener("click", ()=>{
restart()

})

const restart = ()=>{
  localStorage.clear()
  cards.innerHTML = ''
}



document.addEventListener("DOMContentLoaded", renderBooks);
