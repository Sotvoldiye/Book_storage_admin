const init_book = document.getElementById("init_book");
const form = document.querySelector("form");

let newArray = JSON.parse(localStorage.getItem("cards")) || [];

init_book.addEventListener("click", () => {
  form.style.display = "grid";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const NewObject = {
    bookName: form.book_name.value,
    bookAfter: form.book_after.value,
    bookPaper: form.book_paper.value,
    bookPaperSort: form.book_peper_sort.value,
    bookImage: form.book_image.value,
  };

  newArray.push(NewObject);

  localStorage.setItem("cards", JSON.stringify(newArray));

  form.reset();
});
