// About State
const aboutState = function (page) {
  document.querySelector('#home-page').classList.remove('hidden');
  document.querySelector('#header').classList.add('header-hidden');
  document.querySelector('#home-page').classList.add('about-page');
  // Remove other page-specific classes
  document.querySelector('#home-page').classList.remove('projects-page');
  document.querySelector('#home-page').classList.remove('contact-page');

  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class=dark-filter>
    <header class="hero">
      <div class="content">
        <h4><span class="accent"><</span> Front End Web Developer <span class="accent">></span></h4>
        <h1>John Swan</h1>
        <p>About Me</p>
        <br />
        <div class="guide">
          <p>Scroll Down</p>
          <i class="fas fa-chevron-down accent"></i>
        </div>
      </div>
    </header>

  <section>
    <div class="container bg-glass border-main">
      <p>I create responsive web-applications with unique designs and concepts. Using
        <br />
        <span>HTML</span> - <span>SASS</span> - <span>JavaScript</span>
        <br />
        I will make your website stand out from the crowd.
      </p>
      <br /> 
    <p>
      Read on to find out more about my achievements, my development process, and skills that I currently possess. I am always working to learn and improve.
    </p>
    <br />
      <h1>I am a Web Developer.<h1>  
    </div>
  </section>
  
    <! –– Achievements ––>
    <section>
        <div class="section-header">
            <h1>Achievements</h1>
        </div>
        <div class="card-container">
            <div class="skill-card bg-glass border-main">
                <i class="fas fa-trophy"></i>
                <h1>CSS</h1>
                <h3>Top 5%</h3>
                <small>LinkdIn Assessment</small>
            </div>
            <div class="skill-card bg-glass border-main">
                <i class="fas fa-trophy"></i>
                <h1>Web Dev</h1>
                <h3>Top 15%</h3>
                <small>LinkdIn Assessment</small>
            </div>
        </div>
        <div class="section-header">
        <h1>Skills</h1>
      </div>
      <div class="card-container">
        <div class="skill-card bg-glass border-main">
          <p>HTML</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>CSS</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>SASS/SCSS</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>Bootstrap 5</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>JavaScript</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>GitHub</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>ReactJS</p>
        </div>
        <div class="skill-card bg-glass border-main">
          <p>NodeJS</p>
        </div>
    </section>
  
    <! –– Process ––>
    <section id="timeline">
      <h1>My Process</h1>
      <ul>
        <li>
          <div class="bg-glass border-main">
          <i class="far fa-calendar-alt"></i>
            <h3>Plan</h3>
          </div>
        </li>
        <li>
          <div class="bg-glass border-main">
          <i class="far fa-edit "></i> 
            <h3>Design</h3>
          </div>
        </li>
        <li>
          <div class="bg-glass border-main">
            <i class="fas fa-code"></i>
            <h3>Build</h3>
          </div>
        </li>
        <li>
          <div class="bg-glass border-main">
          <i class="fas fa-flask"></i> 
            <h3>Test</h3>
          </div>
        </li>
        <li>
          <div class="bg-glass border-main">
          <i class="fas far fa-paper-plane"></i> 
            <h3>Ship</h3>
          </div>
        </li>
        <li>
          <div class="bg-glass border-main">
          <i class="fas far fa-cogs"></i> 
            <h3>Maintain & Improve</h3>
          </div>
        </li>
      </ul>
    </section>
  
  
    <! –– End –->
    <footer>
      <div class="container bg-glass border-main">
        <h1>Thank you for coming by.</h1>
        <p>You can browse the other two sections to view projects and contact info.</p>
      </div>
    </footer>
    
    `;
};
