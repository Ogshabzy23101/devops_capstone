# Phone E-Commerce Website

A simple front-end phone e-commerce application built with HTML, CSS, and JavaScript, showcasing product listing, filtering, and cart functionality.
This project also demonstrates modern DevOps practices using GitHub Actions for Continuous Integration (CI).

🚀 Features
• Browse phone products
• Filter phones by brand, price, and search
• View single product details
• Add products to cart
• Responsive UI for mobile and desktop
• Code quality checks with CI

🛠️ Tech Stack

Frontend
• HTML
• CSS
• JavaScript (Vanilla)

Tooling & DevOps
• Git & GitHub – version control
• GitHub Actions – CI pipeline
• Prettier – code formatting
• ESLint – JavaScript linting
• Node.js – tooling support (dev only)

📂 Project Structure

phone-e-commerce/
├── .github/
│ └── workflows/
│ └── ci.yml
├── src/
│ ├── cart/
│ ├── filters/
│ ├── pages/
│ └── utils/
├── styles/
├── index.html
├── singlephone.html
├── package.json
├── eslint.config.js
└── README.md

Continuous Integration (CI)

This project uses GitHub Actions to enforce code quality.

CI Workflow

The CI pipeline runs automatically on every pull request to main and performs:
• Code formatting check using Prettier
• JavaScript linting using ESLint

If any check fails, the pull request is blocked from merging.

Running Locally

Clone the repository

git clone <https://github.com/ogshabzy23101/phone-e-commerce.git>
cd phone-e-commerce

Install dependencies

npm install

Run formatting check

npm run format:check

Run linting

npm run lint

Development Workflow 1. Create a feature branch 2. Make changes 3. Commit and push 4. Open a Pull Request 5. CI runs automatically 6. Merge after checks pass

This mimics real-world DevOps and team workflows.

Future Improvements
• Add deployment workflow (GitHub Pages / Netlify)
• Dockerize the application
• Add unit tests
• Backend integration
• CI/CD with cloud infrastructure

Author

Damilola H Ogundiran
DevOps Engineer
GitHub: [https://github.com/Ogshabzy23101](https://github.com/Ogshabzy23101)

License

This project is for learning and demonstration purposes.
