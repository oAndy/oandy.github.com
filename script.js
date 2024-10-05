const counterList = document.getElementById("counter-list");
const addCounterBtn = document.getElementById("add-counter-btn");
const counterTitleInput = document.getElementById("counter-title");
const stepValueInput = document.getElementById("step-value");
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

// Function to create a new counter
function createCounter(title, step) {
  const counterContainer = document.createElement("div");
  counterContainer.className = "counter-container";

  const counterTitle = document.createElement("h2");
  counterTitle.textContent = title;
  counterContainer.appendChild(counterTitle);

  const countDisplay = document.createElement("h1");
  countDisplay.textContent = 0;
  counterContainer.appendChild(countDisplay);

  const incrementBtn = document.createElement("button");
  incrementBtn.textContent = `Increment by ${step}`;
  incrementBtn.addEventListener("click", () => {
    countDisplay.textContent = parseInt(countDisplay.textContent) + step;
  });
  counterContainer.appendChild(incrementBtn);

  const decrementBtn = document.createElement("button");
  decrementBtn.textContent = `Decrement by ${step}`;
  decrementBtn.addEventListener("click", () => {
    countDisplay.textContent = parseInt(countDisplay.textContent) - step;
  });
  counterContainer.appendChild(decrementBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener("click", () => {
    counterList.removeChild(counterContainer);
  });
  counterContainer.appendChild(deleteBtn);

  counterList.appendChild(counterContainer);
}

// Open modal when "Add Counter" button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Add new counter when the "Add Counter" button in the modal is clicked
addCounterBtn.addEventListener("click", () => {
  const title = counterTitleInput.value || "Untitled Counter";
  const stepValue = parseInt(stepValueInput.value) || 1;
  createCounter(title, stepValue);
  counterTitleInput.value = ""; // Clear the input after adding a counter
  stepValueInput.value = "1"; // Reset step value to 1 after adding a counter
  modal.style.display = "none"; // Close the modal
});
