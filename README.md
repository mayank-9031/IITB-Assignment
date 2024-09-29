# Chemical Supplies Table - Project Documentation

## Project Overview

This project is a web-based chemical supplies management table that allows users to view, edit, sort, and manage chemical supply data. Users can interact with the table via button icons to add, delete, move rows, and save changes.

## Table of Contents

- [Features](#features)
- [Design Approach](#design-approach)
- [Icons](#icons)
- [Code Structure](#code-structure)
- [Functionality](#functionality)
- [Styling and UX](#styling-and-ux)

---

## Features

The table provides the following features:
1. **Add New Row** - Users can dynamically add a new row to the table.
2. **Move Row Up and Down** - The user can move the selected row up or down.
3. **Delete Row** - The selected row can be deleted from the table.
4. **Sort Table** - Users can sort the table in ascending or descending order by clicking on the column headers.
5. **Editable Fields** - Users can click on any cell (except the ID column) to edit its content.
6. **Save Functionality** - A placeholder functionality to simulate saving the table.
7. **Hover and Click Effects** - Interactive styling for better user experience.

---

## Design Approach

The project was designed to be simple, modular, and user-friendly, with a focus on **interactivity**, **responsive design**, and **clean UI**. Below are some key design decisions:

### HTML Structure
The HTML file contains:
- A main **toolbar** with buttons represented as icons for various actions.
- A **table** to display chemical supplies data dynamically.
- A **table body** where rows are populated dynamically using JavaScript based on an array of JSON data.

### Data Management
- Chemical data is stored in a **JavaScript array** of objects, with each object representing a chemical.
- The table is populated from this array, allowing for easy manipulation (add, delete, move rows, etc.).

### Functionality with Event-Driven Design
The buttons and table interactivity were implemented using **event listeners** and **JavaScript DOM manipulation** to respond to user actions.

### Sorting Functionality
- The column headers are clickable, allowing sorting based on each column in either **ascending** or **descending** order.
- The sorting is achieved using the **array sort method** on the JavaScript data array and dynamically updating the DOM.

### Editable Cells
- Table cells (excluding the ID column) are made **contenteditable**. This allows users to directly edit the table’s contents.
- Editable cells are highlighted using a **distinct background color** for ease of recognition.

---

## Icons

The toolbar buttons use **SVG icons** instead of text for a cleaner UI. The icons represent the following actions:
1. **Add Row** - Icon resembling a "+" sign.
2. **Move Row Up** - Upward pointing arrow.
3. **Move Row Down** - Downward pointing arrow.
4. **Delete Row** - Trash bin icon.
5. **Refresh** - Circular arrow icon for refreshing the table.
6. **Save** - Disk icon to simulate saving changes.

The use of **SVG icons** allows for scalability and ensures the design is **responsive** and **consistent across devices**.

---

## Code Structure

The project is structured into three main files:

1. **HTML (index.html)**  
   - Defines the structure of the page, including the table and toolbar.
   - Includes minimal semantic tags for accessibility and ease of navigation.
  
2. **CSS (styles.css)**  
   - Handles the styling of the table, toolbar, and interactive elements.
   - Implements **hover effects**, **transitions**, and responsive design for various devices.
  
3. **JavaScript (script.js)**  
   - Handles all functionality, including table manipulation (add, move, delete rows), sorting, and event handling.
   - Includes a predefined array of 15 rows of **JSON data**, which dynamically populates the table.

---

## Functionality

### Adding a Row
- On clicking the **Add Row** button, a new row with default values is added to the table.
- The row's data is appended to the array of JSON objects, and the table is re-rendered to display the new row.

### Moving Rows
- The **Move Up** and **Move Down** buttons allow the user to move a selected row up or down within the table.
- Selection of the row is done by clicking on the row, and the row is highlighted visually when selected.

### Deleting a Row
- On clicking the **Delete Row** button, the currently selected row is removed from both the table and the data array.

### Refresh Table
- The **Refresh** button reloads the table to its initial state using the original data.

### Saving Table Data
- The **Save** button triggers a placeholder function simulating a save operation.

### Sorting
- Clicking on a column header sorts the table based on the clicked column. Clicking again toggles between ascending and descending order.

---

## Styling and UX

### Colors and Themes
- The project uses a minimal color palette for a **clean and professional look**. The colors are soft and neutral, allowing for better focus on content.
- The hover effect highlights actionable elements (buttons, rows, and editable cells), making it clear when an element is interactive.

### Animations and Transitions
- Buttons have a **smooth scaling effect** on hover and click, providing visual feedback to the user.
- Rows change color when hovered over to indicate interactivity.
- Editable cells are highlighted with a light background color to show that they can be edited.

### Tooltip for Icons
- Tooltips appear on hover for all toolbar buttons, giving users hints about their functionality.

### Table and Data Presentation
- The table is presented with clear column separation and padding to ensure readability.
- The table’s headers are clickable to enable sorting and are visually responsive with hover states.

---

## Conclusion

This project showcases a dynamic and user-friendly **chemical supplies table** with robust **interactivity** and **styling**. The **modular design** makes it easy to extend and maintain, while the use of **icons and tooltips** enhances usability. Future improvements could include persistent data storage using local storage or a database, improved accessibility features, and advanced sorting/filtering options.

