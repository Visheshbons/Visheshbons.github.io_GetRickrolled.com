// Get the necessary elements
const linkElement = document.getElementById('rickLink');
const buttonElement = document.querySelector('.btn');

// Set a flag to keep track of the link status
let isOriginalLink = true;

// Define the original link and the new link
const originalLink = "https://blogs.mtdv.me/";
const newLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll link

// Function to toggle the link
function toggleLink() {
  if (isOriginalLink) {
    linkElement.href = newLink;
    linkElement.textContent = "Rickroll Music Video";
  } else {
    linkElement.href = originalLink;
    linkElement.textContent = "Rick Link Generator";
  }
  isOriginalLink = !isOriginalLink;
}

// Add an event listener to the button
buttonElement.addEventListener('click', toggleLink);
