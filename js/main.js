/* ============================================
   LUB - Main JavaScript
   Loads content from content.json and renders the site
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});

async function loadContent() {
    try {
        const response = await fetch('content/content.json');
        const data = await response.json();
        renderProjects(data.projects);
        renderAbout(data.about);
    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback: show error message
        document.getElementById('content').innerHTML = '<p style="padding: 100px; text-align: center;">Error loading content. Make sure content.json exists.</p>';
    }
}

function renderProjects(projects) {
    const container = document.getElementById('content');
    
    projects.forEach(project => {
        const article = document.createElement('article');
        article.className = 'project';
        article.id = project.id;
        
        // Set background image if specified
        if (project.background) {
            article.style.backgroundImage = `url('${project.background}')`;
        }
        
        // Build HTML
        let html = `<div class="project-content">`;
        
        // Title
        html += `<h1 class="project-title">${project.title}</h1>`;
        
        // Subtitle
        if (project.subtitle) {
            html += `<h2 class="project-subtitle">${project.subtitle}</h2>`;
        }
        
        // Meta (date, location)
        if (project.meta) {
            html += `<p class="project-meta">${project.meta}</p>`;
        }
        
        // Text paragraphs
        if (project.text) {
            html += `<div class="project-text">`;
            project.text.forEach(paragraph => {
                html += `<p>${paragraph}</p>`;
            });
            html += `</div>`;
        }
        
        // Pull quote
        if (project.quote) {
            html += `<blockquote class="pull-quote">"${project.quote}"</blockquote>`;
        }
        
        // Images
        if (project.images && project.images.length > 0) {
            html += `<div class="project-images">`;
            project.images.forEach(img => {
                if (img.type === 'row') {
                    // Multiple images in a row
                    html += `<div class="image-row">`;
                    img.sources.forEach(src => {
                        html += `<img src="${src.url}" alt="${src.alt || ''}">`;
                    });
                    html += `</div>`;
                    if (img.caption) {
                        html += `<p class="image-caption ${img.captionColor || ''}">${img.caption}</p>`;
                    }
                } else {
                    // Single image
                    html += `<div class="image-single">`;
                    html += `<img src="${img.url}" alt="${img.alt || ''}">`;
                    if (img.caption) {
                        html += `<p class="image-caption ${img.captionColor || ''}">${img.caption}</p>`;
                    }
                    html += `</div>`;
                }
            });
            html += `</div>`;
        }
        
        html += `</div>`;
        
        article.innerHTML = html;
        container.appendChild(article);
    });
}

function renderAbout(about) {
    const section = document.getElementById('about');
    
    let html = `<div class="project-content">`;
    
    html += `<h1 class="project-title">${about.title}</h1>`;
    
    if (about.text) {
        html += `<div class="project-text">`;
        about.text.forEach(paragraph => {
            html += `<p>${paragraph}</p>`;
        });
        html += `</div>`;
    }
    
    if (about.contact) {
        html += `<div class="contact-info">`;
        html += `<p>${about.contact.address.join('<br>')}</p>`;
        html += `<p>${about.contact.phone}</p>`;
        html += `<p><a href="mailto:${about.contact.email}">${about.contact.email}</a></p>`;
        html += `</div>`;
    }
    
    html += `</div>`;
    
    section.innerHTML = html;
}
