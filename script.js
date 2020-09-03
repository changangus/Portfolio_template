const viewMoreBtn = document.querySelector('.view-more-btn');
const moreProjects = document.querySelector('.show-more');
// Change View More Button Text
function changeBtnText(){
  if(viewMoreBtn.innerHTML === 'View More...'){
    viewMoreBtn.innerHTML = 'View Less...'
  } else {
    viewMoreBtn.innerHTML = 'View More...'
  }
}
// Event Listener to toggle the showing class to hide or show more projects
viewMoreBtn.addEventListener('click',(e) => {
  moreProjects.classList.toggle('showing');
  changeBtnText();
})