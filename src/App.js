import "./App.css";

function App() {
  return (
    <div className="App">

      <header className="hero">
        <h1>Hi, I'm Twinkle Mahato 👋</h1>
        <p>Aspiring DevOps Engineer | AWS | Docker | Kubernetes</p>

        <a href="#projects">
          <button>View Projects</button>
        </a>
      </header>

      <section className="about">
        <h2>About Me</h2>

        <p>
          Passionate about Cloud Computing and DevOps.
          I enjoy building scalable applications using
          Docker, Kubernetes, Jenkins and AWS.
        </p>
      </section>

      <section id="projects" className="projects">

        <h2>Projects</h2>

        <div className="cards">

          <div className="card">
            <h3>🚀 AWS EKS Deployment</h3>
            <p>
              Deployed containerized applications on
              Amazon EKS using Kubernetes.
            </p>
          </div>

          <div className="card">
            <h3>🐳 Docker Projects</h3>
            <p>
              Created Docker images and managed
              multi-container applications.
            </p>
          </div>

          <div className="card">
            <h3>⚙ Jenkins CI/CD</h3>
            <p>
              Automated application build and deployment
              using Jenkins pipelines.
            </p>
          </div>

        </div>

      </section>

      <section className="skills">

        <h2>Skills</h2>

        <div className="skill-list">
          <span>AWS</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Jenkins</span>
          <span>Git</span>
          <span>Linux</span>
          <span>Terraform</span>
        </div>

      </section>

      <footer>

        <h3>Contact</h3>

        <p>Email: twinkle@example.com</p>

        <p>© 2026 Twinkle Mahato</p>

      </footer>

    </div>
  );
}

export default App;
