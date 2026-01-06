# LUB Website - How to Update

## File Structure

```
lub-website/
├── index.html              ← Main page (don't edit)
├── css/
│   └── style.css           ← Styling (edit for design changes)
├── js/
│   └── main.js             ← Logic (don't edit unless needed)
├── content/
│   └── content.json        ← YOUR CONTENT - EDIT THIS FILE
├── images/
│   ├── dirty-business/     ← Images for Dirty Business project
│   ├── ravinevandring/     ← Images for Ravinevandring project
│   ├── backhistory/        ← Images for Backhistory archive
│   └── about/              ← Images for About section
└── README.md               ← This file
```

---

## How to Edit Content

All content is in **`content/content.json`**. Open it in any text editor.

### Structure of content.json:

```json
{
  "projects": [ ... ],    ← List of projects
  "about": { ... }        ← About section
}
```

---

## Adding a New Project

1. Open `content/content.json`
2. Add a new project object inside the `"projects"` array:

```json
{
  "id": "your-project-id",
  "title": "YOUR PROJECT TITLE",
  "subtitle": "Your Subtitle in Italic",
  "meta": "Date · Location · Other info",
  "background": "images/your-project/bg.jpg",
  "text": [
    "First paragraph of your text...",
    "Second paragraph with <span class=\"highlight-pink\">highlighted keywords</span>..."
  ],
  "quote": "A pull quote if you want one.",
  "images": [
    {
      "url": "images/your-project/photo1.jpg",
      "alt": "Description of image",
      "caption": "Caption text · Date · Source",
      "captionColor": "yellow"
    }
  ]
}
```

3. Create folder `images/your-project/` and add your images there
4. Refresh the site

---

## Adding Images

### Single image:
```json
{
  "url": "images/project-name/photo.jpg",
  "alt": "Description",
  "caption": "Your caption here",
  "captionColor": "green"
}
```

### Two images side by side:
```json
{
  "type": "row",
  "sources": [
    { "url": "images/project-name/photo1.jpg", "alt": "Description 1" },
    { "url": "images/project-name/photo2.jpg", "alt": "Description 2" }
  ],
  "caption": "Caption for both images",
  "captionColor": "cyan"
}
```

---

## Highlight Colors

Use these classes to highlight keywords in your text:

- `<span class="highlight-yellow">text</span>` → Fluorescent yellow
- `<span class="highlight-pink">text</span>` → Fluorescent pink  
- `<span class="highlight-green">text</span>` → Fluorescent green
- `<span class="highlight-cyan">text</span>` → Cyan
- `<span class="highlight-blue">text</span>` → Blue

For image captions, use `captionColor`:
- `"captionColor": "yellow"`
- `"captionColor": "pink"`
- `"captionColor": "green"`
- `"captionColor": "cyan"`

---

## Editing Existing Content

1. Open `content/content.json`
2. Find the project you want to edit
3. Change the text, add images, update quote
4. Save and refresh

---

## Background Images

Each project can have a background image. Set it in the `"background"` field:

```json
"background": "images/dirty-business/bg.jpg"
```

Recommended: Use dark or high-contrast images. The site adds a dark overlay automatically.

---

## Image Naming

Keep filenames simple, lowercase, no spaces:
- ✅ `flood-1967.jpg`
- ✅ `dtm-analysis-01.jpg`
- ❌ `Flood Photo (1967).jpg`

---

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

For best performance, optimize images before uploading (max 1600px wide).

---

## Editing About Section

The about section is at the bottom of `content.json`:

```json
"about": {
  "title": "ABOUT",
  "text": [
    "First paragraph...",
    "Second paragraph..."
  ],
  "contact": {
    "address": ["Line 1", "Line 2", "Line 3"],
    "phone": "Tel. +47 ...",
    "email": "hello@lub.global"
  }
}
```

---

## Testing Locally

1. You need a local server (the site uses fetch)
2. Options:
   - VS Code: Install "Live Server" extension, right-click index.html → "Open with Live Server"
   - Python: `python -m http.server 8000` then open http://localhost:8000
   - Node: `npx serve`

---

## Deploying

### GitHub Pages:
1. Push to GitHub
2. Go to Settings → Pages → Source: main branch
3. Site will be at `https://yourusername.github.io/repository-name`

### Netlify:
1. Connect GitHub repo
2. Deploy automatically on push

---

## Questions?

Contact the developers or check the IMAGE_METADATA.md file for archive details.
