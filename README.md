# 🛒 MyStore – Next.js 15 Demo App

A simple **e-commerce demo application** built with **Next.js 15 (App Router)** and **NextAuth.js**.  
It includes public pages, authentication, and a protected dashboard to manage products.

🔗 **Live Demo:** [my-store-chi-five.vercel.app](https://my-store-chi-five.vercel.app/)

---

## 🚀 Features

### ✅ Public Pages
- **Landing Page (`/`)**
  - Navbar, Hero section, Product Highlights, Footer
  - Navigation to Login & Products
- **Product List (`/products`)**
  - Displays product cards with name, description, and price
  - "View Details" button for each product
- **Product Details (`/products/[id]`)**
  - Publicly accessible product information page

### 🔒 Authentication
- **Login (`/login`)**
  - Authentication using **NextAuth.js**
  - Social login (Google) or credentials login
  - Redirects to `/products` after login

### 👨‍💻 Protected Pages
- **Add Product (`/dashboard/add-product`)**
  - Accessible only when logged in
  - Form to add new products
  - Data stored via API Route Handlers
  - Redirects unauthenticated users to `/login`

### ✨ Enhancements
- Loading spinner on form submissions
- Toast message on successful product add
- Light/Dark theme toggle

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **NextAuth.js** (Authentication)
- **Tailwind CSS** (Styling)
- **Lucide Icons** (Icons)
- **Vercel** (Deployment)

---

## 📂 Project Structure

my-store/
├── app/
│ ├── api/ # Route Handlers (mock backend)
│ ├── dashboard/
│ │ └── add-product/ # Protected Add Product page
│ ├── login/ # Authentication page
│ ├── products/ # Products list + details
│ └── page.jsx # Landing page
├── components/ # Reusable UI components
├── lib/ # NextAuth configuration & helpers
└── README.md

---

## ⚡ Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/your-username/my-store.git
cd my-store
2. Install Dependencies
```bash
npm install

3. Configure Environment Variables
Create a .env.local file in the project root:

env
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
4. Run Locally
```bash
npm run dev
Visit http://localhost:3000

🚀 Deployment (Vercel)
Push your code to GitHub

Import project on Vercel Dashboard

Add environment variables in Vercel settings

Deploy 

