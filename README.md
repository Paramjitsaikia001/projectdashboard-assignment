# 🚀 ProTrack

ProTrack is a high-performance, responsive project management dashboard designed for tracking complex project portfolios. Built with a focus on speed, clarity, and modern aesthetics, it provides a seamless interface for managing client engagements and budgets.

## ✨ Key Features

- **Dynamic Portfolio Dashboard**: A high-density table overview of all active and historical projects.
- **Advanced Real-time Filtering**: Instantly search by project name or client and filter by project status (Active, On Hold, Completed).
- **Deep-Dive Detail Pages**: A focused detail view for each project featuring:
  - Budget tracking with visual progress bars.
  - Project leadership and manager information.
  - Timeline tracking (Start/End dates).
  - Rich project descriptions.
- **Responsive Design**: Optimized for everything from large desktop monitors to mobile devices.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter Font Family](https://fonts.google.com/specimen/Inter)
- **Environment**: Vite-powered es6 module system.

## ⚙️ Installation & Setup

Follow the steps below to run the project locally:

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project directory
cd first_assignment

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## 📁 Project Structure

```text
.
├── App.jsx               # Main application logic & navigation state
├── index.html            # Main HTML template
├──src
    ├── components/           # UI Components
    │   ├── ProjectFilters.jsx # Search and status  filter logic
    │   ├── ProjectDetail.jsx  # Detailed   project       
    └── data/                 # Data Layer
    │    └── mockProjects.js    # Sample project    data for demonstration
    └── type/                 # Data Layer
    └── type.js    
```


## 📌 Assumptions & Trade-offs

### Assumptions
- All project data is static and loaded from a local mock data file.
- Filtering is performed entirely on the client side.
- No authentication or backend services are required.

### Trade-offs
- Global state management libraries (Redux, Zustand) were intentionally avoided to keep the solution simple.
- TypeScript was not used; instead, JSDoc comments provide editor-level type hints.

## 🤖 AI Usage Disclosure

AI tools (ChatGPT) were used for:
- Validating folder structure best practices
- Reviewing filter logic and edge-case handling

Changes Made:
- Simplified suggested implementations to avoid over-engineering
- Rewrote AI-generated code to match project requirements

Disagreements:
- Avoided adding unnecessary abstractions such as Context or external state libraries



## 🚀 Getting Started

The application is built to run directly in modern browser environments using ES modules. Simply open `index.html` via a local server (like Live Server or Vite) to see the dashboard in action.

---

*Built with precision for project professionals.*