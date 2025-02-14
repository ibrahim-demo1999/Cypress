# Project 1: Cypress Testing Playground 🧪

Welcome to the **Cypress Testing Playground**! This project is designed to help students learn and practice automated testing using **Cypress**, a modern testing framework for web applications. The goal is to ensure that all parts of the website work as expected by writing and running automated tests.

---

## 📌 Project Overview

This project includes:

- A **frontend website** built with **HTML, CSS, and JavaScript**.
- A **backend server** built with **Node.js**.
- Simulated real-world interactions such as login forms, dropdown selections, checkboxes, and more.
- Automated testing using **Cypress** to validate the behavior of each feature.

---

## 🛠️ Features Tested

The following features are tested in this project:

### ✅ Login Form Validation

- Users **cannot** log in with only a username or only a password.
- Usernames must start and end with `#` to be valid.

### 🔽 Dropdown Selection

- Users can select options from a dropdown menu.
- A message is displayed based on the selected option.

### ☑️ Checkbox Interaction

- Users can check and uncheck a checkbox.
- A message is displayed based on the checkbox state.

### 🖱️ Double-Click Interaction

- Users can double-click an area to trigger an action.

### 🖱️ Right-Click Interaction

- Users can right-click an area to trigger a context menu.

### 🎯 Drag-and-Drop Interaction

- Users can drag an item and drop it into a designated area.

### 📜 Scroll Interaction

- Users can scroll through a scrollable container.

---

## 🚀 How to Run the Project

### 1️⃣ Install Dependencies

Make sure you have **Node.js** installed. Then, install the required dependencies by running:

```bash
npm install
```

### 2️⃣ Start the Backend Server

Run the backend server to serve the frontend:

```bash
node server.js
```

### 3️⃣ Run Cypress Tests

To open Cypress in interactive mode and run the tests:

```bash
npx cypress open
```

## 📂 Project Structure

```bash
project-root/
├── frontend/                # Frontend code (HTML, CSS, JS)
│   ├── index.html           # Main HTML file
│   ├── styles.css           # CSS styles
│   └── scripts.js           # JavaScript logic
├── backend/                 # Backend code (Node.js)
│   ├── server.js            # Backend server
│   └── package.json         # Backend dependencies
└── cypress/                 # Cypress test files
    ├── e2e/
    │   └── tests.cy.js      # Cypress test suite
    └── fixtures/            # Test data (e.g., example.txt)
```
