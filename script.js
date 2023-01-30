const openBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".form__close_btn")
const saveBtn = document.querySelector(".form__submit_btn")

openBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);
saveBtn.addEventListener("click", saveForm);


function openForm() {
  document.querySelector(".edit__form").style.display = "block";
}

function closeForm() {
  document.querySelector(".edit__form").style.display = "none";
}


function saveForm() {
  let name = document.querySelector('input[name="name"]').value;
  let job = document.querySelector('input[name="job"]').value;
  let displayName = document.querySelector('.profile__info_name');
  let displayBio = document.querySelector('.profile__info_bio');
  displayName.innerHTML = name;
  displayBio.innerHTML = job;
  closeForm();
}


document.querySelector(".form").addEventListener("submit", saveForm);