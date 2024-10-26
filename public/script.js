function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => {
    tab.style.display = "none";
  });

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add active class to the clicked button
  event.currentTarget.classList.add("active");
}

// Initialize by showing the general tab
document.addEventListener("DOMContentLoaded", () => {
  showTab("general");
});

function editProduct(productName) {
  const newProductName = prompt("Edit product name:", productName);
  if (newProductName) {
    // Find the list item and update its text
    const listItem = Array.from(document.querySelectorAll("li")).find((item) =>
      item.textContent.includes(productName)
    );
    if (listItem) {
      listItem.childNodes[0].nodeValue = newProductName + " ";
    }
  }
}

function removeProduct(element) {
  // Remove the product from the list
  const listItem = element.parentElement;
  listItem.remove();
}

function addProduct() {
  const currentTab = document.querySelector(
    '.tab-content[style*="display: block"]'
  );
  const productName = prompt("Enter product name:");

  if (productName) {
    // Create a new list item
    const newItem = document.createElement("li");
    newItem.innerHTML = `${productName} <span class="icon" onclick="editProduct('${productName}')">✏️</span> <span class="icon" onclick="removeProduct(this)">🗑️</span>`;

    // Append the new item to the current tab's list
    const ul = currentTab.querySelector("ul");
    ul.appendChild(newItem);
  }
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Optional: Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};