// mission02.js

// Declare variables using const
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('nav button');
const progressFills = document.querySelectorAll('.progress-fill');
const skillFills = document.querySelectorAll('.skill-fill');
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
const resetColorBtn = document.getElementById('resetColorBtn');
const htmlTransmission = document.getElementById('html-transmission');

// Function to apply theme
const applyTheme = (isDark) => {
  if (isDark) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
};

// Function to show section
function showSection(sectionId) {
  // Use of document.querySelector() to change styles
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  
  // Animate progress bars when section becomes active
  if (sectionId === 'mission2') {
    animateProgressBars();
  }
  
  // Animate skill levels when Mission X section becomes active
  if (sectionId === 'missionX') {
    animateSkillLevels();
  }
  
  // Start transmission animation when HTML section becomes active
  if (sectionId === 'html') {
    startTransmission();
  }
}

// Function to animate progress bars
function animateProgressBars() {
  // Use of loops and arithmetic operators
  progressFills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    // Use of arithmetic operator (*) and comparative operator (===)
    if (width === '0') return;
    
    // Use of setTimeout for delayed animation
    setTimeout(() => {
      fill.style.width = `${width}%`;
    }, 300);
  });
}

// Function to animate skill levels
function animateSkillLevels() {
  // Use of loops
  skillFills.forEach(fill => {
    const level = fill.getAttribute('data-level');
    // Use of arithmetic operator (*) and comparative operator (===)
    if (level === '0') return;
    
    // Use of setTimeout for delayed animation
    setTimeout(() => {
      fill.style.width = `${level}%`;
    }, 300);
  });
}

// Function to start transmission animation
function startTransmission() {
  // Clear any existing content
  if (htmlTransmission) {
    htmlTransmission.innerHTML = '';
    
    const transmissionLines = [
      "Initializing HTML transmission...",
      "Connecting to web server...",
      "Loading document structure...",
      "Parsing HTML elements...",
      "Rendering content...",
      "Transmission complete!"
    ];
    
    // Use of loops
    transmissionLines.forEach((line, index) => {
      // Use of arithmetic operator (+) for delay calculation
      const delay = index * 800;
      
      setTimeout(() => {
        const lineElement = document.createElement('div');
        lineElement.classList.add('transmission-line');
        lineElement.textContent = `> ${line}`;
        htmlTransmission.appendChild(lineElement);
        
        // Scroll to bottom
        htmlTransmission.scrollTop = htmlTransmission.scrollHeight;
      }, delay);
    });
  }
}

// Function to generate random color
function getRandomColor() {
  // Use of arithmetic operators (+, *, Math.floor)
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Load saved or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Use of comparative operators (===strict equality comparison, ||, && stops checking after first false)
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    applyTheme(true);
    themeToggle.checked = true;
  } else {
    applyTheme(false);
    themeToggle.checked = false;
  }

  // Toggle on click
  themeToggle.addEventListener('change', (e) => {
    // Use of comparative operator (===)
    applyTheme(e.target.checked);
  });

  // Listen for system changes (e.g., OS theme switch)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches);
      themeToggle.checked = e.matches;
    }
  });
  
  // Add event listeners to navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('data-section');
      showSection(sectionId);
    });
  });
  
  // Interactive demo event listeners - check if elements exist first
  if (changeColorBtn && colorBox) {
    changeColorBtn.addEventListener('click', () => {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
    });
  }
  
  if (resetColorBtn && colorBox) {
    resetColorBtn.addEventListener('click', () => {
      colorBox.style.backgroundColor = '';
    });
  }
  
  // Animate progress bars on initial load if Mission 2 is active
  if (document.getElementById('mission2')?.classList.contains('active')) {
    animateProgressBalls();
  }
  
  // Animate skill levels on initial load if Mission X is active
  if (document.getElementById('missionX')?.classList.contains('active')) {
    animateSkillLevels();
  }
});

// Simple counter using document.getElementById()
let counter = 0;

function increaseCounter() {
    // STEP 1: Get the element by its ID
    const counterDisplay = document.getElementById('counterDisplay');
    
    // STEP 2: Do something with the value
    counter = counter + 1;
    
    // STEP 3: Update the element's content
    counterDisplay.textContent = counter;
    
    // Bonus: Change color when it gets high
    if (counter > 5) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'black';
    }
}

function resetCounter() {
    // Get the element
    const counterDisplay = document.getElementById('counterDisplay');
    
    // Reset the counter and update display
    counter = 0;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = 'black';
}