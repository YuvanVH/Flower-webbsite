// src/views/HomeView.jsx
import '../styles/Home.css';

function HomeView() {
  return (
    <>
      <div>Home</div>
      <div className="homeContainer">
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
