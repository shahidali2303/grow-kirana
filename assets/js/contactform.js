const scriptURL =
  "https://script.google.com/macros/s/AKfycbwf4TC6Xs72j6sL6p31BZ4UUj5q2WuLxBWm42EvtiRZA3vgryTItvqcVdzLk5yEAgJWYQ/exec";
const form = document.forms["contactform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
function submitFunction() {
  alert("Your Response is Submitted... We will contact you soon");
}
function reload() {
  window.location.reload();
}
