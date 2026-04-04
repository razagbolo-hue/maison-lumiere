# 🌸 Maison Lumière — GitHub Hosting Guide

## Your website files
- `index.html` — Main webpage
- `style.css`  — All the design & styling
- `script.js`  — Animations & interactions
- `images/`    — Folder with all your perfume photos

---

## 🚀 How to Host on GitHub Pages (Free!)

### Step 1 — Create a GitHub Account
Go to https://github.com → Sign up → Verify your email

### Step 2 — Create a New Repository
1. Click **+** → **New repository**
2. Name it: `maison-lumiere`
3. Set to **Public** → Check "Add a README file" → **Create repository**

### Step 3 — Upload Your Files
1. Click **Add file → Upload files**
2. Upload ALL files AND the `images/` folder
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. **Settings** → **Pages** (left sidebar)
2. Source: **Deploy from a branch** → Branch: **main** → Folder: **/ (root)**
3. Click **Save**

### Step 5 — Your site is live! 🎉
```
https://YOUR-USERNAME.github.io/maison-lumiere/
```

---

## ✏️ Customizing Your Website

### Change the brand name
Search for `MAISON LUMIÈRE` in `index.html` and replace with your brand name.

### Change product names & prices
Find the product card sections in `index.html` and edit the text.

### Replace images
Simply upload new images to the `images/` folder and use the same filenames, OR update the `src="images/..."` references in `index.html`.

### Change colors
In `style.css`, find `:root { ... }` at the top and change:
- `--gold: #c9a96e;` → your accent color
- `--bg: #0d0b08;` → your background color

---

## 💡 Tips
- Site is **100% free** to host
- Works on mobile, tablet, desktop
- To add a custom domain, go to Settings → Pages → Custom domain
