// src/views/HomeView.jsx
import '../styles/Home.css';

function HomeView() {
  return (
    <>
      <div className="homeContainer">
        {/* Other content of the home view */}
        <section className='intro-film'>
          <div className="video-container">
            <video autoPlay muted loop>
              <source src="/src/assets/pictures/PinkFlowersVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <div className="text">
                {/* <img id="FloretteLogo" src="/src/assets/icons/FloretteLogo.png" alt="Le Florette logo" /> */}
                Le Florette
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id='containerHomeIntro'>

          </div>
        </section>
        <section>
          <img id="orchidPoster" src="src/assets/pictures/orchidPoster.jpeg" alt="orchid poster" />
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
