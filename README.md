# Expense Tracker

A simple, browser-based expense tracker built with vanilla HTML, CSS, and JavaScript. Add expenses, see the running total, and remove entries when they are no longer needed.

## Features

- Add an expense name and amount
- Display saved expenses in a list
- Calculate and show the total amount
- Delete individual expenses
- Store expense data in the browser with `localStorage`
- Dark, responsive-focused interface

## Getting started

No installation or build step is required.

1. Clone or download this project.
2. Open `index.html` in any modern web browser.
3. Enter an expense name and a positive amount, then select **Add Expense**.

Your saved expenses are kept locally in the browser. To clear them completely, clear this site's browser storage/data.

## Project structure

```
Expense Tracker/
|-- index.html  # Page markup and expense form
|-- style.css   # Dark-theme styling
|-- script.js   # Expense logic and local storage handling
`-- README.md
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Web Storage API (`localStorage`)

## How it works

Each expense is stored as an object with an ID, name, and numeric amount. The app saves the array of expenses under the `expenses` key in `localStorage`, so entries can be restored after refreshing the page.

## License

This project is available for personal learning and experimentation.
