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
    });
  });

console.log("test");