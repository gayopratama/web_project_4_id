const openBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".form__close_btn")
const saveBtn = document.querySelector(".form__submit_btn")
const likeBtns = document.querySelectorAll(".element__like-btn")

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
  let displayJob = document.querySelector('.profile__info_job');
  displayName.innerHTML = name;
  displayJob.innerHTML = job;
  closeForm();
}


document.querySelector(".form").addEventListener("submit", saveForm);

likeBtns.forEach(posesButtons)


function posesButtons(item) {
  console.log(item)
item.addEventListener("click",function(e) {
  item.classList.toggle("element__like-btn_active")
} )
}




