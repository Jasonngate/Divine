# Divine Miracle - cPanel Hosting Files

This folder contains all the static HTML, CSS, JavaScript, and asset files needed to host your Next.js website on cPanel.

## 📦 What's Included

- All HTML pages (index.html and subdirectories)
- JavaScript bundles (_next/static/chunks/)
- CSS stylesheets (_next/static/css/)
- Images, videos, and media files
- Fonts and icons
- .htaccess file for proper routing

## 🚀 How to Deploy on cPanel

### Method 1: File Manager (Recommended for Small Sites)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel login page
   - Enter your username and password

2. **Open File Manager**
   - In cPanel, find and click "File Manager"
   - Navigate to `public_html` folder (or your domain's root folder)

3. **Clear Existing Files (if replacing an old site)**
   - Select all existing files in public_html
   - Click "Delete"

4. **Upload Files**
   - Click "Upload" button at the top
   - Select all files from the `cpanel-hosting` folder
   - Or compress the cpanel-hosting folder to a .zip file and upload it

5. **Extract Files (if you uploaded a zip)**
   - Right-click the uploaded .zip file
   - Select "Extract"
   - After extraction, move all files from the extracted folder to public_html root
   - Delete the empty folder and .zip file

### Method 2: FTP/SFTP (Recommended for Large Sites)

1. **Get FTP Credentials**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Connect Using FTP Client**
   - Download an FTP client like FileZilla (free)
   - Connect using your FTP credentials
   - Navigate to `public_html` folder

3. **Upload Files**
   - Select all files from the `cpanel-hosting` folder
   - Drag and drop to the FTP client
   - Wait for upload to complete

### Method 3: Terminal/SSH (For Advanced Users)

```bash
# Compress the folder
tar -czf cpanel-hosting.tar.gz cpanel-hosting/

# Upload via SCP (replace user@yourhost.com with your details)
scp cpanel-hosting.tar.gz user@yourhost.com:~/

# SSH into your server
ssh user@yourhost.com

# Extract to public_html
cd public_html
tar -xzf ../cpanel-hosting.tar.gz --strip-components=1
```

## ⚙️ Important Configuration

### 1. Check .htaccess File
The `.htaccess` file is included and handles:
- Clean URLs (routing)
- Browser caching
- GZIP compression
- Security headers

### 2. Configure Domain
Make sure your domain is pointing to the folder where you uploaded the files:
- If it's your main domain: upload to `public_html`
- If it's an addon domain: upload to the corresponding folder (e.g., `public_html/yourdomain.com`)

### 3. SSL Certificate (Recommended)
- In cPanel, go to "SSL/TLS Status"
- Install a free Let's Encrypt SSL certificate
- Uncomment the HTTPS redirect lines in .htaccess

## 🔧 API Configuration

⚠️ **Important**: This is only the frontend static files. If your site uses API routes or backend functionality, you need to:

1. **Deploy Backend Separately**
   - The `backend` folder needs to be hosted on a Node.js server
   - Use services like Heroku, DigitalOcean, Railway, or VPS

2. **Update API URLs**
   - In your Next.js code, update API endpoints to point to your hosted backend
   - Example: Change `http://localhost:5000` to `https://api.yourdomain.com`

3. **Environment Variables**
   - Set up environment variables on your backend hosting
   - Database connections, email credentials, etc.

## 📋 File Structure

```
cpanel-hosting/
├── .htaccess               # Apache configuration
├── index.html             # Homepage
├── 404.html               # 404 error page
├── favicon.ico            # Site icon
├── _next/                 # Next.js generated files
│   └── static/
│       ├── chunks/        # JavaScript bundles
│       ├── css/           # Stylesheets
│       └── media/         # Fonts
├── about/                 # About page
├── admin/                 # Admin pages
├── appointment/           # Appointment page
├── booksession/           # Book session page
├── contact/               # Contact page
├── gallery/               # Gallery page
├── products/              # Products page
├── services/              # Services page
├── testimonials/          # Testimonials page
└── [various media files]  # Images, videos, etc.
```

## ✅ Testing Your Site

After uploading:

1. Visit your domain (e.g., https://yourdomain.com)
2. Test all navigation links
3. Check that images and videos load properly
4. Test forms and contact functionality
5. Verify mobile responsiveness

## 🔍 Troubleshooting

### Pages show 404 errors
- Make sure .htaccess file is uploaded
- Check that mod_rewrite is enabled in cPanel (usually enabled by default)

### Images not loading
- Verify all files were uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### Site not loading
- Clear browser cache
- Check DNS propagation (can take 24-48 hours for new domains)
- Verify files are in the correct directory (public_html)

### Forms not working
- Check backend API is running
- Verify CORS settings on backend
- Update API endpoints in frontend code

## 📞 Need Help?

If you encounter issues:
1. Check cPanel error logs (Metrics > Errors)
2. Verify file permissions
3. Contact your hosting provider's support
4. Check browser console for JavaScript errors

## 🔄 Updating Your Site

When you make changes:
1. Run `npm run build` in the Next.js project
2. Copy the updated `out` folder contents
3. Upload/replace files on cPanel
4. Clear browser cache to see changes

---

Generated on: February 6, 2026
Next.js Version: 15.5.3
