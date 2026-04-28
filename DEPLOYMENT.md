# 🚀 Olive Website Deployment Guide

This guide will help you deploy your Olive website replica to GitHub Pages for free public access.

## 📋 Prerequisites

- GitHub account
- Git installed on your local machine

## 🛠️ Step-by-Step Deployment

### 1. Initialize Git Repository

```bash
cd olive-landing
git init
git add .
git commit -m "Initial commit: Complete Olive website replica"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `olive-landing`
4. Set to Public (required for GitHub Pages)
5. Click "Create repository"

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/olive-landing.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Build and deployment", select **GitHub Actions**
5. Save

### 5. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your Next.js project
- Export it as static files
- Deploy to GitHub Pages

Your website will be available at:
```
https://YOUR_USERNAME.github.io/olive-landing
```

## 🔧 Configuration Details

### Next.js Configuration
- Static export enabled for GitHub Pages
- Base path configured for subdirectory deployment
- Images optimized for static hosting

### GitHub Actions Workflow
- Triggers on push to main branch
- Builds and deploys automatically
- Uses latest Node.js and Ubuntu runner

## 📱 Local Development

To run locally:
```bash
npm install
npm run dev
```
Visit: http://localhost:3000

## 🎯 Features Deployed

✅ Complete Olive website replica  
✅ All sections from original site  
✅ Responsive design  
✅ Interactive components  
✅ Professional styling  
✅ SEO optimized  
✅ Production ready  

## 🌐 Live Demo

Once deployed, your website will include:
- Hero section with CTAs
- App preview with phone mockup
- How it works section
- Health benefits
- Customer testimonials
- Feature comparison
- Pricing plans
- Protection features
- FAQ section
- Complete footer

## 📞 Support

If you encounter any issues:
1. Check GitHub Actions logs in your repository
2. Ensure repository is set to Public
3. Verify GitHub Pages is enabled in Settings

Your Olive website is now ready for public viewing! 🎉
