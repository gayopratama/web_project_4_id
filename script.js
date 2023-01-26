function openForm() {
  document.querySelector(".edit__form").style.display = "block";
}



function closeForm() {
  document.querySelector(".edit__form").style.display = "none";
  

}


function saveForm(e) {
  //e.preventDefault()
  let name = document.querySelector('input[name="name"]').value;
  let job = document.querySelector('input[name="job"]').value;
  let displayName = document.querySelector('.profile__info_name');
  let displayBio = document.querySelector('.profile__info_bio');
  displayName.innerHTML = name;
  displayBio.innerHTML = job;

}


document.querySelector(".form").addEventListener("submit", saveForm);