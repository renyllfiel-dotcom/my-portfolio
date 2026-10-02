export default function Home() {
  return (
    <main className="home">
      <p className="welcome">WELCOME TO MY WEBSITE</p>

      <h1>Hello, I&apos;m fiel</h1>

      <p className="description">
        Welcome to my personal portfolio website. Here you can learn
        about me, see my projects, and explore my gallery.
      </p>

      <div className="buttons">
        <a href="/portfolio" className="button">
          View Portfolio
        </a>

        <a href="/about" className="button outline">
          About Me
        </a>
      </div>
    </main>
  );
}