// src/views/HomeView.jsx
import '../styles/Home.css';

function HomeView() {
  return (
    <>
      <div className="homeContainer">
        <section className='intro-film'>
          <div className="video-container">
            <video width="100%" height="auto" autoPlay muted loop>
              <source src="/src/assets/pictures/PinkFlowersVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <div className="text">FLORETTE</div>
            </div>
          </div>
        </section>
        <section>
          <img id="tulipPoster" src="src/assets/pictures/Enrich.jpeg" alt="Tulip poster" />
        </section>
        <section className='containerHome1'>
          <div className='containerLeft1'>We are Florette</div>
          <div className='containerRight1'>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomeView
