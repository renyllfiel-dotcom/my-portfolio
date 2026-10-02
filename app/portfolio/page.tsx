export default function Portfolio() {
  return (
    <main className="page">
      <p className="welcome">MY WORK</p>

      <h1>Portfolio</h1>

      <p className="description">
        Here are some of my projects and school activities.
      </p>

      <div className="cards">
        <div className="card">
          <h2>Web Design</h2>
          <p>A simple website created using HTML and CSS.</p>
        </div>

        <div className="card">
          <h2>Java Project</h2>
          <p>A beginner Java GUI application for a school project.</p>
        </div>

        <div className="card">
          <h2>Next.js Project</h2>
          <p>This portfolio website created using Next.js and React.</p>
        </div>
      </div>
    </main>
  );
}