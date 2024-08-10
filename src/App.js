function App() {
  return (
    <div>
      <h1>Hi, I'm (your name)</h1>
      <img src="https://www.specfictionshop.com/cdn/shop/files/MAIN-MAGNETO_1b826574-a40c-4f68-81c1-aedfebded650_800x.png?v=1707433038" alt="A picture of myself" />
      <h2> About Me</h2>
      <p>
      I am a passionate developer with a love for creating web applications.
      </p>
      <div>
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button"
        >
          GitHub
        </a>
      </div>
      <div>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
