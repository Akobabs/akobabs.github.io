// Fetch and display quotes
fetch('http://127.0.0.1:8000/api/quotes/')
    .then(response => response.json())
    .then(data => {
        const quotesDiv = document.getElementById('quotes');
        data.forEach(quote => {
            const quoteBlock = document.createElement('blockquote');
            quoteBlock.textContent = `${quote.text} - ${quote.author}`;
            quotesDiv.appendChild(quoteBlock);
        });
    });

// Fetch and display projects
fetch('http://127.0.0.1:8000/api/projects/')
    .then(response => response.json())
    .then(data => {
        const projectsDiv = document.getElementById('projects');
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card';
            projectCard.innerHTML = `<strong>${project.title}</strong><p>${project.description}</p>`;
            projectsDiv.appendChild(projectCard);
        });
    });

// Fetch and display publications
fetch('http://127.0.0.1:8000/api/publications/')
    .then(response => response.json())
    .then(data => {
        const publicationsDiv = document.getElementById('publications');
        data.forEach(pub => {
            const pubCard = document.createElement('div');
            pubCard.className = 'card';
            pubCard.innerHTML = `<strong>${pub.title}</strong><p>${pub.description}</p>`;
            publicationsDiv.appendChild(pubCard);
        });
    });
