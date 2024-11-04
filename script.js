function showSkills(role) {
    const skillsDisplay = document.getElementById('skillsDisplay');
    
    // Set content for the selected role
    const skillsContent = {
      "Novice Programmer": `<h2>Novice Programmer</h2><ul><li>Basic coding principles.</li><li>Introduction to programming languages.</li></ul>`,
      "Front-End Developer": `<h2>Front-End Developer</h2><ul><li>HTML, CSS, JavaScript.</li><li>Responsive design.</li></ul>`,
      "Back-End Developer": `<h2>Back-End Developer</h2><ul><li>Server-side languages.</li><li>Database management.</li></ul>`,
      "Game Developer": `<h2>Game Developer</h2><ul><li>Game engines.</li><li>Interactive design.</li></ul>`,
      "UI Designer": `<h2>UI Designer</h2><ul><li>Interface design.</li><li>Layout principles.</li></ul>`,
      "UX Engineer": `<h2>UX Engineer</h2><ul><li>User flow optimization.</li><li>Prototyping.</li></ul>`,
      "Database Architect": `<h2>Database Architect</h2><ul><li>Database schema design.</li><li>Data management.</li></ul>`,
      "API Engineer": `<h2>API Engineer</h2><ul><li>API integration.</li><li>RESTful services.</li></ul>`,
      "3D Game Designer": `<h2>3D Game Designer</h2><ul><li>3D modeling basics.</li><li>Physics simulation.</li></ul>`,
      "AI Programmer": `<h2>AI Programmer</h2><ul><li>Machine learning basics.</li><li>Algorithm design.</li></ul>`,
      "UI/UX Game Designer": `<h2>UI/UX Game Designer</h2><ul><li>Game interface design.</li><li>User experience in games.</li></ul>`
    };
  
    // Update and show the skills box
    skillsDisplay.innerHTML = skillsContent[role];
    skillsDisplay.classList.add('show');
  }