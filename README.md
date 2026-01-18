# Armaan Saxena | Full Stack & Web3 Developer 🚀

Welcome to my professional portfolio repository. This project showcases my journey, technical skills, and contributions to the open-source and blockchain ecosystem.

**Live Demo:** [https://armaansaxena.vercel.app/](https://armaansaxena.vercel.app/)

## 🛠️ Tech Stack

This portfolio is built with a focus on performance, accessibility, and clean design:

- **Frontend:** React.js, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend Integration:** EmailJS (for serverless contact handling)

## ✨ Key Features

- **Automated Contact System:** Dual-email logic that notifies me of new messages and sends a professional greeting to the sender.
- **Dynamic Project Gallery:** Featured work with direct links to GitHub repositories and live deployments.
- **Achievement & Certification Vault:** Interactive cards with hover overlays to view verified digital certificates.
- **Optimized Performance:** Fully responsive design with a minimalistic light theme.

## 🚀 Local Development

If you'd like to run this project locally to explore the code:

1. **Clone the repository:**
   ```sh
   git clone [https://github.com/Armaansaxena/portfolio.git](https://github.com/Armaansaxena/portfolio.git)
   cd portfolio
2. **Install dependencies:**
    ```sh
    npm install
3. **Set up Environment Variables:**
    Create a .env file in the root directory and add your EmailJS credentials. This is crucial for the contact form to function locally:
    ```sh
    VITE_EMAIL_SERVICE_ID=your_service_id
    VITE_EMAIL_TEMPLATE_ID=your_admin_notification_template_id
    VITE_EMAIL_GREETING_TEMPLATE_ID=your_sender_greeting_template_id
    VITE_EMAIL_PUBLIC_KEY=your_public_key
4. **Start the development server:**
    ```sh
    npm run dev

## 📂 Project Structure



* **`/src/components`**: Contains the core sections of the site (Hero, Projects, Certifications, Contact).
* **`/src/hooks`**: Custom React hooks for UI interactions and toast notifications.
* **`/src/assets`**: Optimized images and project screenshots.
* **`/src/integrations`**: Configuration for external services like EmailJS.

---

## 🛡️ Architecture & Security

This project utilizes a **Serverless Architecture**. By using EmailJS, the frontend communicates directly with the email service, removing the need for a dedicated Node.js backend while keeping API keys secure via environment variables and domain whitelisting.



---

## 🤝 Connect With Me

Feel free to reach out if you're interested in collaborating on Web3 projects, Open Source, or Full Stack development!

* **LinkedIn**: [Armaan Saxena](https://www.linkedin.com/in/armaan-saxena-3a8185328/)
* **GitHub**: [@Armaansaxena](https://github.com/Armaansaxena)
* **Portfolio**: [armaansaxena.vercel.app](https://armaansaxena.vercel.app/)
* **Email**: [armaansaxena704@gmail.com](mailto:armaansaxena704@gmail.com)