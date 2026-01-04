# LUB - Laboratory for Urban Boundaries Website

A minimal, elegant website for Laboratory for Urban Boundaries.

## Structure

```
lub-website/
├── index.html          # Homepage with image gallery
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles
├── js/
│   └── gallery.js      # Gallery functionality
├── data/
│   └── images.json     # Image list (edit this to update gallery)
└── images/             # Store your images here
```

## How to Update Images

### Option 1: Local images
1. Add your images to the `images/` folder
2. Edit `data/images.json` to include the new images:

```json
{
  "images": [
    {
      "url": "images/your-image.jpg",
      "caption": "Description of the image"
    }
  ]
}
```

### Option 2: External URLs (e.g., from Google Drive, Dropbox, etc.)
You can also use direct URLs to images hosted elsewhere:

```json
{
  "images": [
    {
      "url": "https://your-cloud-storage.com/image.jpg",
      "caption": "Description"
    }
  ]
}
```

### Using a Spreadsheet
If you want to manage images via a spreadsheet:
1. Create a Google Sheet with columns: `url`, `caption`
2. Use a service like [SheetDB](https://sheetdb.io/) or [Sheety](https://sheety.co/) to convert it to JSON
3. Modify `js/gallery.js` to fetch from that URL instead of `data/images.json`

## Hosting Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the `main` branch
3. Go to Settings > Pages > Source: Deploy from branch `main`
4. Your site will be at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Connect your GitHub repo to Netlify
2. Deploy automatically on push

### Custom Domain
Add a `CNAME` file with your domain name (e.g., `lub.global`)

## Customization

### Fonts
The site uses Cormorant Garamond from Google Fonts. To change:
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select a font and get the embed code
3. Replace the `<link>` tags in HTML files
4. Update `font-family` in `css/style.css`

### Colors
Edit these values in `css/style.css`:
- Background: `background-color: #fff;`
- Text: `color: #000;`
- Footer text: `color: #666;`

### Content
- **About text**: Edit `about.html`
- **Contact info**: Edit `contact.html`
- **Copyright year**: Update in all three HTML files in the `<footer>`

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License
© 2024-2025 Laboratory for Urban Boundaries. All rights reserved.
