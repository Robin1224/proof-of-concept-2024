/* Makes the checkbox only allow 4 items to be selected */
document
  .querySelectorAll(".ingredients-list input[type=checkbox]")
  .forEach((el) => {
    el.addEventListener("change", function () {
      if (
        el.closest(".ingredients-list").querySelectorAll("input:checked")
          .length == 0
      ) {
        document.querySelector(".cauldron svg").style.color = "#545353";
      } else if (this.checked) {
        document.querySelector(".cauldron svg").style.color = this.dataset.color;
      };

      if (this.checked) {
        document.querySelector(`.active-grid label[for="${this.id}"]`).classList.remove("display-none")
      } else {
        document.querySelector(`.active-grid label[for="${this.id}"]`).classList.add("display-none")
      };
      
      

      if (
        el.closest(".ingredients-list").querySelectorAll("input:checked")
          .length == 6
      ) {
        el.closest(".ingredients-list")
          .querySelectorAll("input:not(:checked)")
          .forEach((el) => {
            el.disabled = true;
          });
      } else {
        el.closest(".ingredients-list")
          .querySelectorAll("input")
          .forEach((el) => {
            el.disabled = false;
          });
      }

      if (
        el.closest(".ingredients-list").querySelectorAll("input:checked")
          .length <= 1
      ) {
        document.querySelector("button[type=submit]").disabled = true;
      } else {
        document.querySelector("button[type=submit]").disabled = false;
      };
    });
  });

document.querySelector(".previous-page").addEventListener("click", function () {
  const currentPage = document.querySelector(".book").dataset.current;
  const newPage = parseInt(currentPage) - 1;
  const lastPage = document.querySelectorAll(".potion-page").length - 1;

  document.querySelector(".book").dataset.current = newPage;
  document.querySelectorAll(".potion-page").forEach((el) => {
    if (el.dataset.id == newPage) {
      el.classList.remove("display-none");
    } else {
      el.classList.add("display-none");
    };
  });

  checkButtonsDisabled(newPage, lastPage);
});

document.querySelector(".next-page").addEventListener("click", function () {
  const currentPage = document.querySelector(".book").dataset.current;
  const newPage = parseInt(currentPage) + 1;
  const lastPage = document.querySelectorAll(".potion-page").length - 1;

  document.querySelector(".book").dataset.current = newPage;
  document.querySelectorAll(".potion-page").forEach((el) => {
    if (el.dataset.id == newPage) {
      el.classList.remove("display-none");
    } else {
    el.classList.add("display-none");
    };
  });

  checkButtonsDisabled(newPage, lastPage);
});

function checkButtonsDisabled (newPage, lastPage) {
  if (newPage == lastPage) {
    document.querySelector(".next-page").disabled = true;
  } else {
    document.querySelector(".next-page").disabled = false;
  };

  if (newPage == 0) {
    document.querySelector(".previous-page").disabled = true;
  } else {
    document.querySelector(".previous-page").disabled = false;
  };
}

document.querySelector(".close-book").addEventListener("click", function () {
  document.querySelector(".book").classList.toggle("book-closed");

  if (document.querySelector(".book").classList.contains("book-closed")) {
    document.querySelector(".close-book").textContent = ">";
  } else {
    document.querySelector(".close-book").textContent = "<";
  }
});

document.onload(document.querySelector("button[type=submit]").disabled = true);