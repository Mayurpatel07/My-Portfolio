# Mayur Patel - Personal Portfolio

A modern, responsive personal portfolio website showcasing my journey as Founder, CEO & CMO of Evantr and Full-Stack Developer. Built with React, Tailwind CSS, and Firebase.

## 🌟 Live Demo

**Portfolio:** [Your Vercel URL]
**Startup:** [Evantr - Event Marketplace](https://www.evantr.com)

## ✨ Features

- **Featured Startup Section** - Highlighting Evantr with detailed role and platform information
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Persistent theme toggle with localStorage
- **Fully Responsive** - Mobile-first design that works on all devices
- **Firebase Integration** - Contact form with Firestore database and Analytics
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **SEO Optimized** - Fast loading and search engine friendly
- **Interactive Sections** - Home, About, Skills, Experience, Education, Projects, Contact

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.3.6
- **Routing:** React Router v6.20.0
- **Animations:** Framer Motion 10.16.16
- **Icons:** Lucide React 0.294.0
- **Notifications:** React Hot Toast 2.4.1

### Backend & Services
- **Database:** Firebase Firestore
- **Analytics:** Firebase Analytics
- **Hosting:** Vercel

### Development Tools
- **CSS Processing:** PostCSS with Autoprefixer
- **Package Manager:** npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/Mayurpatel07/My-Portfolio.git
cd My-Portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Step 4: Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Firestore Database**
3. Enable **Analytics**
4. Create a collection named `contacts` in Firestore
5. Copy your Firebase configuration to the `.env` file

### Step 5: Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view your portfolio

### Step 6: Build for Production
```bash
npm run build
```

### Step 7: Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio2/
├── public/
│   └── image/
│       └── evantr.png          # Evantr logo/image
├── src/
│   ├── components/
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── Navbar.jsx          # Navigation with theme toggle
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light theme management
│   ├── data/
│   │   ├── education.js        # Education details
│   │   ├── experience.js       # Work experience data
│   │   ├── projects.js         # Projects portfolio
│   │   └── skills.js           # Technical skills
│   ├── pages/
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Home.jsx            # Hero/Landing page
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── Skills.jsx          # Skills display
│   ├── App.jsx                 # Main app component
│   ├── firebase.js             # Firebase configuration
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS config
├── vercel.json                 # Vercel deployment config
└── vite.config.js              # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **About Section** - Edit `src/pages/About.jsx`
2. **Skills** - Modify `src/data/skills.js`
3. **Experience** - Update `src/data/experience.js`
4. **Education** - Edit `src/data/education.js`
5. **Projects** - Modify `src/data/projects.js`

### Theme Customization
Edit `tailwind.config.js` to change colors, fonts, and spacing:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Add New Images
Place images in `public/image/` and import them in your data files:
```javascript
import myImage from '/public/image/myimage.png';
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📧 Contact Form

The contact form automatically saves messages to Firebase Firestore with:
- Name
- Email
- Message
- Timestamp

Messages are stored in the `contacts` collection.

## 🎯 Key Sections

### 1. Home (Hero)
- Introduction with animated text
- Call-to-action buttons
- Professional title highlighting

### 2. About
- Personal introduction
- Founder & CEO emphasis
- Professional journey

### 3. Skills
- Technical skills categorized by:
  - Frontend Development
  - Backend Development
  - Tools & Technologies

### 4. Experience
- Work history timeline
- Company details with website links
- Role descriptions

### 5. Education
- Academic background
- Degree and institution details
- Duration and location

### 6. Projects
- **Featured Startup:** Evantr with detailed role and platform info
- **Other Projects:** Portfolio of development work
- Live demos and source code links

### 7. Contact
- Contact form with Firebase integration
- Social media links
- Direct contact information

## 🔒 Environment Variables

Required environment variables for Firebase:

```
VITE_FIREBASE_API_KEY          # Firebase API Key
VITE_FIREBASE_AUTH_DOMAIN      # Firebase Auth Domain
VITE_FIREBASE_PROJECT_ID       # Firebase Project ID
VITE_FIREBASE_STORAGE_BUCKET   # Firebase Storage Bucket
VITE_FIREBASE_MESSAGING_SENDER_ID  # Firebase Messaging Sender ID
VITE_FIREBASE_APP_ID           # Firebase App ID
VITE_FIREBASE_MEASUREMENT_ID   # Firebase Measurement ID
```

⚠️ **Note:** Never commit `.env` file to version control

## 🐛 Troubleshooting

### Issue: Firebase not connecting
- Check if environment variables are correctly set
- Verify Firebase project configuration
- Ensure Firestore is enabled in Firebase Console

### Issue: Images not loading on Vercel
- Use image imports instead of public paths
- Example: `import img from '/public/image/img.png'`

### Issue: Dark mode not persisting
- Clear browser localStorage
- Check ThemeContext implementation

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Mayur Patel**
- Founder, CEO & CMO at Evantr Pvt Ltd
- Full-Stack Developer
- Email: patel.mayur2113@gmail.com
- Phone: +91 9370462587
- LinkedIn: [Mayur Patel](https://www.linkedin.com/in/mayur-patel-5a17a4260/)
- GitHub: [Mayurpatel07](https://github.com/Mayurpatel07)
- Website: [Evantr](https://www.evantr.com)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Firebase for backend services
- Unsplash for placeholder images
- Lucide for beautiful icons

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📱 Mobile Responsive: 100%
- 🎨 Accessibility: WCAG 2.1 compliant
- 🚀 Fast Loading: < 2s initial load

## 🔄 Version History

- **v1.0.0** (2024) - Initial release with all core features
- Featured startup section highlighting Evantr
- Dark/Light mode toggle
- Firebase integration
- Responsive design

---

Made with ❤️ by Mayur Patel
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
