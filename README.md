# Paolo Libenzio Brignoli - Academic Website

This is the source code for Paolo Libenzio Brignoli's academic website, built for deployment on GitHub Pages.

## 🚀 Quick Start

1. **Upload to GitHub**:
   - Create a repository named `paolobrignoli.github.io`
   - Upload all files to the repository
   - Enable GitHub Pages in repository settings

2. **Access your website**:
   - Your site will be available at `https://paolobrignoli.github.io`

## 📁 Project Structure

```
paolobrignoli.github.io/
├── index.html              # Homepage
├── research.html           # Research publications page
├── teaching.html           # Teaching page
├── projects.html           # Projects page
├── collaboration.html      # Collaboration opportunities
├── blog.html              # Blog page
├── cv-contact.html        # CV and contact information
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js           # JavaScript functionality
├── data/
│   ├── publications.json    # Published papers data
│   ├── working-papers.json  # Working papers data
│   ├── software.json       # Software/tools data
│   ├── projects.json       # Projects data
│   ├── teaching.json       # Teaching data
│   └── blog-posts.json     # Blog posts data
├── assets/
│   ├── images/
│   │   └── profile-photo-placeholder.txt
│   └── videos/
│       └── background-video-placeholder.txt
└── README.md              # This file
```

## 🎨 Design Features

- **Dark Theme**: Forest green background with autumn colors (burnt orange, rust, golden yellow)
- **Typography**: Inter for headings, Crimson Text for body text
- **Mobile Responsive**: Optimized for all device sizes
- **Smooth Animations**: Subtle fade-in effects and hover animations
- **Accessible**: Keyboard navigation and screen reader support

## ✏️ Customizing Content

### Adding Your Profile Photo

1. Replace `assets/images/profile-photo-placeholder.txt` with your photo
2. Recommended: 300x300 pixels, JPG/PNG format
3. Update the image reference in `index.html` if you change the filename

### Adding a Background Video (Optional)

1. Replace `assets/videos/background-video-placeholder.txt` with your video
2. Recommended: MP4 format, under 10MB
3. Update the video reference in `index.html`
4. Or remove the `.background-video` div entirely if you don't want a video

### Updating Publications

**Adding a new publication to `data/publications.json`:**

```json
{
  "papers": [
    {
      "title": "Your Paper Title",
      "authors": "Author Names",
      "year": "2024",
      "journal": "Journal Name",
      "abstract": "Your abstract text here...",
      "doi": "https://doi.org/your-doi",
      "pdf": "https://link-to-your-pdf.pdf"
    }
  ]
}
```

**Adding a working paper to `data/working-papers.json`:**
Use the same format as publications. Leave `doi` empty if not available.

### Updating Software

**Edit `data/software.json`:**

```json
{
  "software": [
    {
      "name": "Package Name",
      "fullname": "Full Package Name",
      "description": "Description of your software package",
      "link": "https://github.com/your-repo"
    }
  ]
}
```

### Adding Projects

**Edit `data/projects.json`:**

```json
{
  "projects": [
    {
      "title": "Project Title",
      "description": "Project description",
      "link": "https://project-link.com"
    }
  ]
}
```

### Adding Blog Posts

**Edit `data/blog-posts.json`:**

```json
{
  "posts": [
    {
      "title": "Blog Post Title",
      "date": "2024-01-01",
      "excerpt": "Brief description of the blog post...",
      "link": "https://link-to-full-post.com"
    }
  ]
}
```

### Updating Teaching Information

**Edit `data/teaching.json`:**

```json
{
  "current_courses": [
    {
      "title": "Course Name",
      "description": "Course description"
    }
  ],
  "past_courses": [
    {
      "title": "Past Course Name",
      "description": "Course description"
    }
  ],
  "materials": [
    {
      "title": "Material Name",
      "link": "https://link-to-material.com"
    }
  ]
}
```

## 🔧 Updating Static Content

### Contact Information

Edit the contact section in `cv-contact.html`:

```html
<div class="contact-item">
    <h3>Email</h3>
    <p><a href="mailto:your-email@domain.com">your-email@domain.com</a></p>
</div>
```

### Bio Information

Update the bio text in `index.html` in the `.hero-bio` section.

### Professional Links

Update the links in the `.hero-links` section of `index.html`:

```html
<a href="https://orcid.org/your-id" class="link-button">ORCID</a>
<a href="https://scholar.google.com/your-profile" class="link-button">Google Scholar</a>
<a href="https://linkedin.com/in/your-profile" class="link-button">LinkedIn</a>
```

### CV Upload

1. Upload your CV PDF to the repository
2. Update the link in `cv-contact.html`:

```html
<a href="path/to/your-cv.pdf" class="download-button">Download CV</a>
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Create Repository**:
   - Go to GitHub and create a new repository
   - Name it exactly: `paolobrignoli.github.io`
   - Make it public

2. **Upload Files**:
   - Upload all website files to the repository
   - You can use GitHub's web interface or git commands

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

4. **Access Your Site**:
   - Your website will be available at `https://paolobrignoli.github.io`
   - It may take a few minutes to become available

### Using Git Commands

```bash
# Clone your repository
git clone https://github.com/paolobrignoli/paolobrignoli.github.io.git

# Add your files
cp -r website-files/* paolobrignoli.github.io/

# Commit and push
cd paolobrignoli.github.io
git add .
git commit -m "Initial website setup"
git push origin main
```

## 🛠️ Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Optimized CSS and JavaScript
- Efficient image and asset loading
- Mobile-first responsive design

### Accessibility Features
- Keyboard navigation support
- Screen reader compatibility
- High contrast colors
- Focus indicators
- Skip-to-content links

## 📝 Maintenance

### Regular Updates
1. Keep publications and working papers current
2. Update project information regularly  
3. Add new blog posts as needed
4. Keep contact information current

### Adding New Sections
To add new pages:
1. Create new HTML file following existing structure
2. Add navigation link to all existing pages
3. Update CSS if needed for new content types
4. Add corresponding JSON data file if dynamic content is needed

## 🎨 Customization

### Color Scheme
The website uses CSS custom properties for easy color customization. Edit these in `css/styles.css`:

```css
:root {
    --bg-primary: #0a1410;        /* Background */
    --accent-orange: #cc5500;      /* Primary accent */
    --accent-rust: #e67e22;        /* Secondary accent */
    --accent-yellow: #daa520;      /* Tertiary accent */
    --text-cream: #f5f5dc;         /* Primary text */
}
```

### Typography
To change fonts, update the Google Fonts import in HTML files and the font-family declarations in CSS.

## 🐛 Troubleshooting

### Common Issues

**Website not loading after deployment:**
- Check that repository name is exactly `paolobrignoli.github.io`
- Ensure GitHub Pages is enabled in settings
- Wait up to 10 minutes for initial deployment

**JSON data not loading:**
- Check JSON syntax using a validator
- Ensure file paths are correct
- Check browser console for error messages

**Mobile display issues:**
- Test responsive design using browser dev tools
- Check viewport meta tag is present
- Verify CSS media queries

### Getting Help
- Check GitHub Pages documentation
- Use browser developer tools to debug issues
- Validate HTML and CSS using online validators

## 📄 License

This website template is provided as-is for academic use. Feel free to modify and adapt for your own academic website.

---

**Built with**: HTML5, CSS3, JavaScript, GitHub Pages
**Last Updated**: 2024