export default function Gallery() {
  return (
    <main className="page">
      <p className="welcome">MY COLLECTION</p>

      <h1>Gallery</h1>

      <p className="description">
        Here are some examples of my projects and activities.
      </p>

      <div className="gallery">
        <div className="gallery-item">
          <div className="gallery-number">01</div>
          <h2>Project 1</h2>
          <p>My sample project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">02</div>
          <h2>Project 2</h2>
          <p>My sample project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">03</div>
          <h2>Project 3</h2>
          <p>My sample project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">04</div>
          <h2>Project 4</h2>
          <p>My sample project</p>
        </div>
      </div>
    </main>
  );
}