// Module content for each card
const moduleContents = [
  {
    title: 'Why Practicing with AI Matters',
    body: `<p>Practicing with AI is essential to develop intuition, understand its strengths and limitations, and become comfortable integrating it into your workflow. The more you practice, the more value you can extract from AI tools in your daily life and work.</p>`
  },
  {
    title: 'Use Cases for Job Seekers & Builders',
    body: `<ul><li>Resume and cover letter optimization</li><li>Job search automation</li><li>Market research</li><li>Prototyping and coding assistance</li><li>Content creation and brainstorming</li></ul>`
  },
  {
    title: 'My Personal Tech Stack',
    body: `<p>Explore the AI tools and platforms I use daily: <ul><li>ChatGPT & GPT-4</li><li>Notion AI</li><li>Perplexity</li><li>Midjourney</li><li>Zapier</li><li>And more...</li></ul></p>`
  },
  {
    title: 'Communities',
    body: `<p>Join these communities to stay updated and connect with other AI enthusiasts:<ul><li>AI Exchange</li><li>Latent Space Discord</li><li>Hacker News</li><li>Reddit: r/ArtificialIntelligence</li></ul></p>`
  },
  {
    title: 'Newsletters & Pods',
    body: `<p>Recommended newsletters and podcasts:<ul><li>Ben's Bites</li><li>The Rundown AI</li><li>Latent Space Podcast</li><li>Practical AI</li></ul></p>`
  },
  {
    title: 'Tips, Tricks & Prompts',
    body: `<ul><li>Be specific with your prompts</li><li>Iterate and refine</li><li>Use system instructions</li><li>Save your best prompts</li><li>Experiment with different models</li></ul>`
  }
];

// Theme tab switching logic
const navTabs = document.querySelectorAll('.navigation .nav-item');

// Apply theme from localStorage on page load
function applyTheme(theme) {
  document.body.classList.remove('cyberpunk-theme', 'y2k-theme', 'sketch-theme', 'elementary-theme', 'matrix-theme', 'earth-theme');
  if (theme === 'cyberpunk') {
    document.body.classList.add('cyberpunk-theme');
  } else if (theme === 'y2k') {
    document.body.classList.add('y2k-theme');
  } else if (theme === 'sketch') {
    document.body.classList.add('sketch-theme');
  } else if (theme === 'elementary') {
    document.body.classList.add('elementary-theme');
  } else if (theme === 'matrix') {
    document.body.classList.add('matrix-theme');
  } else if (theme === 'earth') {
    document.body.classList.add('earth-theme');
  } else if (theme === 'early') {
    // Classic: no theme class, just default styles
  }
}

const savedTheme = localStorage.getItem('theme') || 'early';
applyTheme(savedTheme);
// Set active tab on load
navTabs.forEach(tab => {
  if (tab.getAttribute('data-theme') === savedTheme) {
    tab.classList.add('active');
  } else {
    tab.classList.remove('active');
  }
});

navTabs.forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();
    navTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const theme = this.getAttribute('data-theme');
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  });
});

// For module.html: update back button to preserve theme
const backBtn = document.getElementById('backBtn');
if (backBtn) {
  backBtn.onclick = () => {
    const theme = localStorage.getItem('theme') || 'early';
    window.location.href = `index.html#theme=${theme}`;
  };
} 