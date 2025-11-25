# GitHub Pages Deployment Guide

## Setup Instructions

### 1. GitHub Repository Setup
1. Create a new repository on GitHub (if not already done)
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically deploy on every push to main branch

### 3. Configure Custom Domain
1. In your domain registrar (where you bought aquatrekhikkaduwa.com):
   - Add the following DNS records:
   
   **For apex domain (aquatrekhikkaduwa.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_GITHUB_USERNAME.github.io
   ```

2. In GitHub repository Settings → Pages:
   - Under "Custom domain", enter: `aquatrekhikkaduwa.com`
   - Check "Enforce HTTPS" (GitHub will automatically provision SSL certificate)
   - Wait 24-48 hours for DNS propagation

### 4. SSL Certificate
GitHub Pages automatically provides a free SSL certificate via Let's Encrypt for custom domains. Your existing SSL certificate is not needed as GitHub handles this automatically.

**Important:** Make sure to check "Enforce HTTPS" in GitHub Pages settings after DNS is configured.

### 5. Deploy
The site will automatically deploy when you push to the main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Or use the manual deploy command:
```bash
npm run deploy
```

### 6. Verify Deployment
- Check the **Actions** tab in your GitHub repository to see deployment status
- Once complete, visit https://aquatrekhikkaduwa.com
- Verify HTTPS is working (look for the padlock icon)

## Files Created
- `public/CNAME` - Tells GitHub Pages to use your custom domain
- `.github/workflows/deploy.yml` - Automated deployment workflow
- Updated `package.json` with deploy scripts

## Troubleshooting
- **DNS not working:** Wait 24-48 hours for propagation
- **SSL certificate issues:** Ensure "Enforce HTTPS" is checked and DNS is properly configured
- **Build fails:** Check the Actions tab for error details
- **404 errors:** Ensure the base path is set correctly in vite.config.ts

## Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
npm run deploy
```

This builds and deploys to the gh-pages branch.
