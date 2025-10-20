# 🛡️ Security Assistant Bot - Website

Το επίσημο website για το Security Assistant Discord Bot.

## 📁 Αρχεία

- `index.html` - Η κύρια σελίδα του website
- `style.css` - Όλα τα styles
- `script.js` - JavaScript για animations και interactivity
- `privacy.html` - Privacy Policy (προαιρετικό)
- `terms.html` - Terms of Service (προαιρετικό)

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Δημιούργησε ένα νέο GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bot-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Πήγαινε στο repo Settings
   - Scroll down στο "Pages"
   - Source: `main` branch, `/root` folder
   - Save

3. **Το site σου θα είναι διαθέσιμο στο:**
   ```
   https://YOUR_USERNAME.github.io/bot-website/
   ```

### Option 2: Netlify

1. Ανέβασε τα αρχεία στο GitHub
2. Πήγαινε στο [Netlify](https://netlify.com)
3. "New site from Git"
4. Διάλεξε το repo σου
5. Deploy!

### Option 3: Vercel

1. Ανέβασε τα αρχεία στο GitHub
2. Πήγαινε στο [Vercel](https://vercel.com)
3. "Import Project"
4. Διάλεξε το repo σου
5. Deploy!

## ⚙️ Customization

### 1. Bot Invite Link

Στο `index.html`, άλλαξε:
```html
<a href="YOUR_INVITE_LINK_HERE" class="btn btn-primary">
```

Με το πραγματικό invite link του bot σου από το Discord Developer Portal.

### 2. Support Server Link

Στο `index.html`, άλλαξε:
```html
<a href="YOUR_SUPPORT_SERVER_INVITE" class="btn btn-primary">
```

Με το invite link του support server σου.

### 3. Contact Email

Στο `index.html`, άλλαξε:
```html
<a href="mailto:support@yourbot.com" class="btn btn-secondary">
```

Με το πραγματικό email σου.

### 4. Stats

Ενημέρωσε τα stats στο hero section:
```html
<div class="stat-number">50+</div>  <!-- Αριθμός commands -->
<div class="stat-number">24/7</div> <!-- Uptime -->
<div class="stat-number">100%</div> <!-- Free tier -->
```

### 5. Features

Προσθήκη/αφαίρεση features στο `features-grid` section.

### 6. Commands

Ενημέρωση commands στο `commands-grid` section.

### 7. Pricing

Ενημέρωση τιμών και features στο `pricing-grid` section.

## 🎨 Colors & Branding

Στο `style.css`, άλλαξε τα χρώματα στο `:root`:

```css
:root {
    --primary: #5865F2;        /* Discord blue */
    --secondary: #57F287;      /* Green */
    --background: #0a0a0f;     /* Dark background */
    --surface: #1a1a2e;        /* Card background */
}
```

## 📱 Responsive Design

Το website είναι πλήρως responsive και λειτουργεί σε:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktop
- 🖥️ Large screens

## ✨ Features

- ✅ Modern gradient design
- ✅ Smooth animations
- ✅ Scroll effects
- ✅ Interactive elements
- ✅ Copy-to-clipboard commands
- ✅ Particle effects
- ✅ Responsive navigation
- ✅ SEO optimized

## 📊 Analytics (Optional)

Για να προσθέσεις Google Analytics, πρόσθεσε πριν το `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Testing Locally

Για να δεις το website τοπικά:

1. **Με Python:**
   ```bash
   cd website
   python -m http.server 8000
   ```
   Άνοιξε: `http://localhost:8000`

2. **Με Node.js:**
   ```bash
   npx http-server website
   ```

3. **Με VS Code:**
   - Εγκατέστησε το "Live Server" extension
   - Right-click στο `index.html`
   - "Open with Live Server"

## 📝 TODO

- [ ] Άλλαξε το invite link
- [ ] Άλλαξε το support server link
- [ ] Άλλαξε το email
- [ ] Ενημέρωσε τα stats
- [ ] Πρόσθεσε screenshots/GIFs
- [ ] Φτιάξε Privacy Policy
- [ ] Φτιάξε Terms of Service
- [ ] Πρόσθεσε favicon
- [ ] Deploy στο GitHub Pages

## 🆘 Support

Για βοήθεια με το website:
- Discord: [Your Support Server]
- Email: support@yourbot.com
- GitHub Issues: [Your Repo]

## 📄 License

© 2025 Security Assistant Bot. All rights reserved.
