document.addEventListener("DOMContentLoaded", () => {
  // Login Form Handling
  document
    .getElementById("login-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.success) {
          document.getElementById("success-message").style.display = "block";
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    });

  // Dropdown Logic
  const dropdown = document.getElementById("dropdown");
  const dropdownMessage = document.getElementById("dropdown-message");

  dropdown.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    dropdownMessage.textContent = `You selected: ${selectedValue}`;
    dropdownMessage.style.display = "block";
  });

  // Checkbox Logic
  const checkbox = document.getElementById("agree");
  const checkboxMessage = document.getElementById("checkbox-message");

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      checkboxMessage.textContent = "You agreed to the terms!";
    } else {
      checkboxMessage.textContent = "You disagreed with the terms.";
    }
    checkboxMessage.style.display = "block";
  });

  // Drag and Drop Functionality
  const dragItem = document.getElementById("drag-item");
  const dropZone = document.getElementById("drop-zone");

  dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropZone.addEventListener("drop", async (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);

    // Send drag-drop event to backend
    await fetch("/drag-drop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: draggedElement.id,
        target: e.target.id,
      }),
    });
  });

  // Double Click Tracking
  document
    .getElementById("double-click-area")
    .addEventListener("dblclick", async () => {
      await fetch("/doubleclick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ element: "double-click-area" }),
      });
    });

  // Right Click Tracking
  document
    .getElementById("right-click-area")
    .addEventListener("contextmenu", async (e) => {
      e.preventDefault();
      await fetch("/rightclick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ element: "right-click-area" }),
      });
    });

  // Scroll Tracking
  document
    .getElementById("scroll-container")
    .addEventListener("scroll", async (e) => {
      const scrollPosition = e.target.scrollTop;
      if (scrollPosition > 500) {
        // Example threshold
        await fetch("/scroll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ position: scrollPosition }),
        });
      }
    });
});
