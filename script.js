// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Fetching required elements
  const profilePicContainer = document.getElementById('profile-pic-container');
  const profilePic = document.getElementById('profile-pic');
  const slider = document.getElementById('content-size');
  const card = document.querySelector('.card');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const background = document.querySelector('.background');
  const pageContainer = document.querySelector('.page-container');
  const button = document.querySelector('.button');

  // When the window is fully loaded
  window.onload = function() {
    // Apply light mode styles initially
    background.classList.add('light_mode_bg');
    pageContainer.classList.add('light_mode_pc');
    profilePic.classList.add('light_mode_pp');
    button.classList.add('light_mode_button');
    button.classList.add('light_mode_button:hover');
    card.classList.add('light_mode_card');
  }

  // When profile picture container is clicked
  profilePicContainer.addEventListener('click', function() {
    // Rotate and scale the profile picture temporarily
    profilePic.style.transform = 'rotate(360deg)';
    profilePic.style.scale = 3;
    setTimeout(() => {
      profilePic.style.transform = 'rotate(0)';
      profilePic.style.scale = 1;
    }, 1000);
  });

  // When the slider value changes
  slider.addEventListener('input', function() {
    // Get the new size value from the slider
    const newSize = parseFloat(slider.value);
    // Scale the card based on the slider value
    card.style.transform = `scale(${newSize})`;
    setTimeout (() => {
      // Reset the card's scale after a delay
      card.style.transform = `scale(1)`;
      slider.value = 1; // Reset slider value to 1
    }, 15000); // After 15 seconds
  });

  // When the dark mode toggle is changed
  darkModeToggle.addEventListener('change', function() {
    if (darkModeToggle.checked) {
      // Apply dark mode styles
      background.classList.add('dark_mode_bg');
      background.classList.remove('light_mode_bg');
      pageContainer.classList.remove('light_mode_pc');
      pageContainer.classList.add('dark_mode_pc');
      profilePic.classList.remove('light_mode_pp');
      profilePic.classList.add('dark_mode_pp');
      button.classList.remove('light_mode_button');
      button.classList.remove('light_mode_button:hover');
      card.classList.remove('light_mode_card');
      button.classList.add('dark_mode_button');
      button.classList.add('dark_mode_button:hover');
      card.classList.add('dark_mode_card');
    } else {
      // Apply light mode styles
      background.classList.remove('dark_mode_bg');
      background.classList.add('light_mode_bg');
      pageContainer.classList.add('light_mode_pc');
      pageContainer.classList.remove('dark_mode_pc');
      profilePic.classList.add('light_mode_pp');
      profilePic.classList.remove('dark_mode_pp');
      button.classList.add('light_mode_button');
      button.classList.add('light_mode_button:hover');
      card.classList.add('light_mode_card');
      button.classList.remove('dark_mode_button');
      button.classList.remove('dark_mode_button:hover');
      card.classList.remove('dark_mode_card');
    }
  });
});
