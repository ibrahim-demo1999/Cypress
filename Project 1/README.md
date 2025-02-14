# 🧪 Cypress Test Cases

## **Test 1: Login Validation 🔐**

**Goal:** Ensure users cannot log in with invalid credentials.

### ❌ Test 1.1: Cannot log in with username only

- **Action:** Type `"bash"` in the username field and click **Login**.
- **Expected Result:** The success message remains **hidden**.

### ❌ Test 1.2: Cannot log in with password only

- **Action:** Type `"password123"` in the password field and click **Login**.
- **Expected Result:** The success message remains **hidden**.

### ❌ Test 1.3: Username must start and end with `#`

- **Action:** Type `"bash"` (without `#`) and a password, then click **Login**.
- **Expected Result:** The success message remains **hidden**.

---

## **Test 2: Dropdown Selection 📋**

**Goal:** Ensure the dropdown displays the correct message based on selection.

### ✅ Test 2.1: Select "Option 1"

- **Action:** Choose `"Option 1"` from the dropdown.
- **Expected Result:** A message appears:  
  📝 `"You selected: option1"`.

### ✅ Test 2.2: Select "Option 2"

- **Action:** Choose `"Option 2"` from the dropdown.
- **Expected Result:** A message appears:  
  📝 `"You selected: option2"`.

---

## **Test 3: Checkbox Interaction ✔️**

**Goal:** Verify checkbox functionality and displayed messages.

### ✅ Test 3: Check and Uncheck the Box

- **Actions:**
  1. Check the `"I agree to the terms"` box.
  2. Uncheck the box.
- **Expected Results:**
  - ✅ When **checked** → `"You agreed to the terms!"`
  - ❌ When **unchecked** → `"You disagreed with the terms."`

---

## **Test 4: User Interactions 🖱️**

**Goal:** Test different user interactions.

### ✅ Test 4.1: Double-click

- **Action:** Double-click the `"Double Click Me!"` area.
- **Expected Result:** Action is triggered.

### ✅ Test 4.2: Right-click

- **Action:** Right-click the `"Right Click Me!"` area.
- **Expected Result:** Context menu appears or relevant action is triggered.

### ✅ Test 4.3: Drag-and-Drop

- **Action:** Drag the `"Drag Me"` item to the `"Drop Here"` zone.
- **Expected Result:** Item is successfully dropped.

### ✅ Test 4.4: Scrolling

- **Action:** Scroll to the **bottom** of the scrollable box.
- **Expected Result:** The box scrolls without issues.

---
