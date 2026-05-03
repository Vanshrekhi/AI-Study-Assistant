
# StudentiqAgent — AI Study Assistant

**StudentiqAgent** is an AI-powered academic assistant designed to help college students 
* 💡 Understand concepts clearly
* 📝 Generate revision notes
* ❓ Practice quizzes
* 📅 Plan study schedules

All via **natural conversation**!


It supports subjects like **DSA, DBMS, Operating Systems, Computer Networks, and Web Development**, offering instant guidance in simple, step-by-step explanations.

---

## 🎯 Features

* **Doubt Solver:** Ask questions and get simple, step-by-step answers
* **Revision Notes:** Quickly summarize topics for exams
* **Quiz Generator:** Automatically generate quizzes to test knowledge
* **Study Planner:** Personalized timetable based on subjects & available time

**Example Queries:**

* "Explain Operating System deadlock in simple words"
* "Make revision notes for DBMS normalization"
* "Create a quiz on Computer Networks"
* "Plan my study schedule for 5 days (OS, DBMS, CN)"

---

## 🚀 Quick Start Guide

Follow these steps to get the project running locally on your machine.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vaishnavi-parodkar/studentiqAgent.git
cd studentiqAgent
```

### 2️⃣ Install Dependencies

```bash
npm install
npm install @tambo-ai/react
```

> This installs all necessary packages for Next.js and Tambo AI integration.

### 3️⃣ Initialize Tambo

```bash
npx tambo init
```

> Initializes the Tambo project locally.

### 4️⃣ Add Your Tambo API Key

1. Rename or create `.env.local` in the root of your project:

```bash
mv example.env.local .env.local   # If an example exists
```

2. Add your **Tambo API key**:

```env
NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key_here
```

> Get a free API key.
> **Important:** Never commit `.env.local` to GitHub - it’s already in `.gitignore`.

### 5️⃣ Run the Project Locally

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000). You should see the **StudentIQ landing page**.

---

## 🗂️ Project Structure
```bash
STUDENTIQAGENT/
├── .codesandbox/          # Codesandbox configuration files
├── .next/                 # Next.js build output (auto-generated)
├── node_modules/          # Project dependencies
├── public/                # Static assets accessible by the browser
├── src/
│   ├── app/               # Next.js App Router directory
│   │   ├── chat/          # Chat-related routes and logic
│   │   ├── interactables/ # Interactive UI routes/components
│   │   ├── favicon.ico    # Application favicon
│   │   ├── globals.css    # Global CSS styles
│   │   ├── layout.tsx     # Root layout component
│   │   ├── page.tsx       # Main landing page
│   │   └── providers.tsx  # Global context providers
│   ├── components/        # Reusable UI components
│   │   ├── tambo/         # Tambo-specific components
│   │   ├── ui/            # Shared UI primitives
│   │   ├── ApiKeyCheck.tsx # API key validation component
│   │   └── TamboChat.tsx  # Chat interface component
│   ├── lib/               # Utility functions and helpers
│   └── services/          # External service and API integrations
├── .env.local             # Environment variables (local)
├── .gitignore             # Files and folders ignored by Git
├── .hintrc                # Linting configuration
├── CLAUDE.md              # AI/LLM usage documentation
├── eslint.config.mjs      # ESLint configuration
├── example.env.local      # Sample environment variable file
├── next-env.d.ts          # Next.js TypeScript declarations
├── next.config.ts         # Next.js configuration
├── package-lock.json      # Dependency lock file
├── package.json           # Project metadata and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```
---


## 🌐 Live Demo

Link: https://studentiq-agent.vercel.app/

---

## 🖼️ Screenshots
### Landing Page
<img width="1918" height="990" alt="image" src="https://github.com/user-attachments/assets/8574c2e3-e457-40c0-b9f2-abd05791466a" />

### Main Page
<img width="1910" height="1042" alt="image" src="https://github.com/user-attachments/assets/5663d57c-30b9-43f4-837d-ce9921960b86" />


---
## ⚙️ How It Works

* **TamboProvider:** Wraps the app to provide AI functionality.
* **Components:** Registered in `src/lib/tambo.ts` (e.g., Graph, DataCard).
* **Tools:** Registered in `src/lib/tambo.ts` (e.g., countryPopulation, globalPopulation).

Example usage of `TamboProvider`:

```tsx
<TamboProvider apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}>
  {children}
</TamboProvider>
```

> AI can now access the tools and components you registered.

---

## 🔧 Recommended Commands

```bash
# Install dependencies
npm install

# Initialize Tambo
npx tambo init

# Run locally
npm run dev
```

---

## 🌐 Deployment on Vercel

1. Push your repository to GitHub.
2. Connect the repo to [Vercel](https://vercel.com/).
3. Add your environment variable in Vercel:

```
NEXT_PUBLIC_TAMBO_API_KEY = your_tambo_api_key_here
```

4. Deploy the app. ✅

> Your API key stays secure — it is **never exposed** in the GitHub repository.











