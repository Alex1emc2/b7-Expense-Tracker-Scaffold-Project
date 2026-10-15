# Expense Tracker (React + TypeScript Scaffold)

A multi-page expense tracker built to practice TypeScript, React Context, and React Router v7.

> **Note:** This is a learning scaffold. The focus is on architecture (typed state, routing, context), not visual design. The UI is intentionally minimal and uses inline styles.

## Features

- Add expenses (title, amount, category, date) with basic form validation
- Delete individual expenses or reset the whole list
- Detail page per expense (`/detail/:id`)
- Currency symbol selector ($, Rp, Eur, Btc), display only, no conversion
- Running total
- Data persisted in `localStorage`

## Tech Stack

React 19 · TypeScript · React Router v7 · Vite · ESLint

## Project Structure
src/
├── context/ # ExpenseContext, ExpenseProvider, useExpense hook
├── pages/ # Home, AddExpense, Detail
├── types.ts # Expense and Currency interfaces
└── App.tsx # Routes

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Roadmap

- [ ] Edit existing expenses
- [ ] Filter by category and date
- [ ] UI redesign with Tailwind CSS

## License

MIT
