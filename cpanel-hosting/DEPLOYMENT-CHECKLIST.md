# 📋 cPanel Deployment Checklist

## Before Upload
- [ ] Build completed successfully (`npm run build`)
- [ ] All files copied to cpanel-hosting folder
- [ ] .htaccess file is present
- [ ] README.md reviewed

## cPanel Setup
- [ ] Logged into cPanel
- [ ] Identified correct upload directory (public_html or domain folder)
- [ ] Backed up existing files (if any)
- [ ] Cleared old files from public_html

## Upload Files
- [ ] All files uploaded via File Manager, FTP, or SSH
- [ ] Verified folder structure is intact
- [ ] Checked file permissions (644 for files, 755 for directories)
- [ ] .htaccess file is visible (enable "Show Hidden Files" in File Manager)

## Configuration
- [ ] Domain DNS is pointing to hosting server
- [ ] SSL certificate installed (recommended)
- [ ] .htaccess HTTPS redirect enabled (if using SSL)
- [ ] mod_rewrite is enabled (usually default)

## Backend Setup (If Applicable)
- [ ] Backend deployed separately (Node.js hosting)
- [ ] Database connected and configured
- [ ] Environment variables set
- [ ] API endpoints updated in frontend
- [ ] CORS configured on backend

## Testing
- [ ] Homepage loads correctly (https://yourdomain.com)
- [ ] All pages accessible (about, services, contact, etc.)
- [ ] Images and videos load properly
- [ ] Navigation works without 404 errors
- [ ] Forms submit correctly (if backend is running)
- [ ] Mobile responsive design works
- [ ] Browser console shows no critical errors

## Performance & SEO
- [ ] GZIP compression enabled (.htaccess)
- [ ] Browser caching configured (.htaccess)
- [ ] Images optimized
- [ ] SSL certificate active
- [ ] Redirects working properly

## Post-Deployment
- [ ] Clear browser cache
- [ ] Test from multiple devices
- [ ] Monitor cPanel error logs
- [ ] Set up backups (cPanel backup tool)
- [ ] Update DNS records if needed

## Optional Enhancements
- [ ] Set up CDN (Cloudflare)
- [ ] Configure email accounts
- [ ] Install monitoring tools
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console

---

## Quick Upload Commands

### Via FTP (FileZilla):
1. Host: ftp.yourdomain.com
2. Username: your-cpanel-username
3. Password: your-cpanel-password
4. Port: 21
5. Drag & drop all files from cpanel-hosting to public_html

### Via SSH (Terminal):
```bash
# Create archive
cd c:\Users\jason\Desktop\Astro
tar -czf site.tar.gz cpanel-hosting/*

# Upload (replace with your details)
scp site.tar.gz user@yourserver.com:~/

# Extract on server
ssh user@yourserver.com
cd public_html
tar -xzf ~/site.tar.gz --strip-components=1
```

### Via cPanel File Manager:
1. Login → File Manager → public_html
2. Upload → Select all files from cpanel-hosting
3. Wait for upload to complete

---

**Estimated Upload Time:**
- Fast connection (100 Mbps): ~2-5 minutes
- Medium connection (10 Mbps): ~10-20 minutes
- Slow connection (<5 Mbps): ~30-60 minutes

**Total Size:** ~137 files (varies based on media content)

---

✅ **Deployment Complete!** Visit your domain to see your live site.
