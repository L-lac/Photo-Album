// Handles user interaction with image track drag functionality 
// invisible slider 
const track = document.getElementbyId("image-track");
window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}
