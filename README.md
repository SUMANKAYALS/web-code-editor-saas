# ☁️ SkyCode – Cloud-Based Code Editor

SkyCode is a modern cloud-based code editor that allows developers to write, run, and share code instantly from anywhere. It features secure authentication, real-time database, syntax highlighting, Monaco editor integration, and Pro subscriptions powered by Lemon Squeezy.

---

# 🚀 Live Demo

🌐 https://skycode.dev *(replace with your actual domain)*

---

# ✨ Features

## 👨‍💻 Core Features

* Cloud-based code editor
* Monaco Editor (VS Code editor)
* Multi-language support
* Syntax highlighting
* Copy and share snippets
* View snippet details

---

## 🔐 Authentication

* Clerk authentication
* Google login
* GitHub login
* Secure user sessions

---

## 💾 Database (Convex)

* Store code snippets
* Store comments
* Star snippets
* Real-time data updates

---

## 💳 Pro Features (Lemon Squeezy)

* Upgrade to Pro subscription
* Secure webhook verification
* Automatic Pro activation
* Premium access control

---

## 🎨 UI Features

* Modern dark theme
* Responsive design
* Fast and optimized
* Developer-focused interface

---

# 🧱 Tech Stack

## Frontend

* Next.js 15 / 16 (App Router)
* TypeScript
* Tailwind CSS
* Monaco Editor
* Lucide Icons

## Backend

* Convex (database + server functions)
* Clerk (authentication)
* Lemon Squeezy (payments)

---

# 📁 Project Structure

```
skycode/
│
├ app/
│ ├ snippets/
│ ├ editor/
│ └ layout.tsx
│
├ components/
│ ├ Header.tsx
│ ├ Footer.tsx
│ └ UpgradeButton.tsx
│
├ convex/
│ ├ schema.ts
│ ├ users.ts
│ ├ snippets.ts
│ ├ lemonSqueezy.ts
│ └ http.ts
│
├ public/
│ ├ favicon.svg
│ └ og-image.png
│
└ README.md
```

---

# ⚙️ Environment Variables

Create `.env.local`

```
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

LEMON_SQUEEZY_WEBHOOK_SECRET=
CLERK_WEBHOOK_SECRET=
```

---

# 🛠️ Installation

## 1. Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/skycode.git
cd skycode
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start Convex

```bash
npx convex dev
```

---

## 4. Start Next.js

```bash
npm run dev
```

---

## 5. Open browser

```
http://localhost:3000
```

---

# 💳 Payment Integration Flow

```
User clicks Upgrade
↓
Lemon Squeezy checkout
↓
Webhook sent to Convex
↓
Signature verified
↓
User upgraded to Pro
```

---

# 🔐 Authentication Flow

```
User signs up
↓
Clerk webhook triggers
↓
Convex saves user
↓
User can create snippets
```

---

# 🧠 Database Tables

* users
* snippets
* snippetComments
* stars

---

# 🚀 Deployment

Deploy frontend:

* Vercel (recommended)

Deploy backend:

```bash
npx convex deploy
```

---

# 📸 Screenshots

### 🏠 Home Page
![Home Page](public/Demo_image/home.png)

### 💳 Payment
![Payment](public/Demo_image/payment.png)

### ⭐ Pro Plan
![Pro Plan](public/Demo_image/pro_plan.png)

### 👤 Profile
![Profile](public/Demo_image/profile.png)

### 📄 Snippets
![Snippets](public/Demo_image/snippets.png)

---

# 🧑‍💻 Author

**Suman Kayal**
```
GitHub:
https://github.com/SUMANKAYALS
Linkedin:[//www.linkedin.com/in/suman-kayal10/](https://www.linkedin.com/in/suman-kayal10/)
portfolio:[//sumankayalportfolio.vercel.app/](https://sumankayalportfolio.vercel.app/)
```
---

# ⭐ Support

If you like this project, please star the repo ⭐

---

# 📜 License

MIT License

---

# 🔗 Resources

Convex:
https://convex.dev

Clerk:
https://clerk.com

Lemon Squeezy:
https://lemonsqueezy.com

Next.js:
https://nextjs.org
