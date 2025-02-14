## **Test 1: Login Validation 🔐**

### Goal: Ensure users can't log in with invalid credentials

- **Test 1.1:**  
  ❌ _Can't log in with username only_

  - What we do: Type "bash" in the username field and click "Login".
  - What we check: The success message stays hidden.

- **Test 1.2:**  
  ❌ _Can't log in with password only_

  - What we do: Type "password123" in the password field and click "Login".
  - What we check: The success message stays hidden.

- **Test 1.3:**  
  ❌ _Username must start and end with #_
  - What we do: Type "bash" (without #) and a password, then click "Login".
  - What we check: The success message stays hidden.

---

## **Test 2: Dropdown Selection 📋**

### Goal: Check if dropdown shows correct messages

- **Test 2.1:**  
  ✅ _Select "Option 1"_

  - What we do: Choose "Option 1" from the dropdown.
  - What we check: A message appears saying "You selected: option1".

- **Test 2.2:**  
  ✅ _Select "Option 2"_
  - What we do: Choose "Option 2" from the dropdown.
  - What we check: A message appears saying "You selected: option2".

---

## **Test 3: Checkbox Interaction ✔️**

### Goal: Test checkbox messages

- **Test 3:**  
  ✅ _Check and uncheck the box_
  - What we do:
    1. Check the "I agree to the terms" box.
    2. Uncheck the box.
  - What we check:
    - When checked: Message says "You agreed to the terms!"
    - When unchecked: Message says "You disagreed with the terms."

---

## **Test 4: Interactions 🖱️**

### Goal: Test user actions

- **Test 4.1:**  
  ✅ _Double-click_

  - What we do: Double-click the "Double Click Me!" area.

- **Test 4.2:**  
  ✅ _Right-click_

  - What we do: Right-click the "Right Click Me!" area.

- **Test 4.3:**  
  ✅ _Drag-and-drop_

  - What we do: Drag the "Drag Me" item to the "Drop Here" zone.

- **Test 4.4:**  
  ✅ _Scrolling_
  - What we do: Scroll to the bottom of the scrollable box.

---
