# Mayur Patel - Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern UI/UX** - Clean and professional design with smooth animations
- **Dark/Light Mode** - Toggle between dark and light themes
- **Responsive Design** - Works seamlessly on all devices
- **Firebase Integration** - Contact form with Firestore database
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Fast and search engine friendly

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Database:** Firebase Firestore
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Firestore Database
   - Copy your Firebase configuration
   - Update `src/firebase.js` with your credentials

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔥 Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable Firestore Database
4. Go to Project Settings > General
5. Scroll to "Your apps" and click on Web icon
6. Copy the configuration and replace in `src/firebase.js`

## 📁 Project Structure

```
Portfolio2/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/           # Static data
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── education.js
│   ├── context/        # React Context
│   │   └── ThemeContext.jsx
│   ├── firebase.js     # Firebase configuration
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `skills.js` - Your skills and expertise
- `projects.js` - Your projects portfolio
- `experience.js` - Work experience
- `education.js` - Educational background and certifications

### Modify Theme Colors

Edit `tailwind.config.js` to change the color scheme.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## 📧 Contact

- **Email:** patel.mayur2113@gmail.com
- **LinkedIn:** [linkedin.com/in/mayyur21](https://linkedin.com/in/mayyur21/)
- **Phone:** +91 9370462587

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Mayur Patel
