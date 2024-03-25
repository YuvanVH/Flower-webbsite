// src/components/FlowerCard.jsx
import '../styles/FlowerCard.css';

const FlowerCard = ({ flower }) => {
  return (
    <div className="flower-card">
      <img src={`/src/assets/picturesApi/${flower.image}`} alt={flower.name} className="flower-image" />
      <div className="flower-info">
        <h2 className="flower-name">{flower.name}</h2>
        <p className="flower-latin"><i>{flower.latinName}</i></p>
        <p className="flower-description">{flower.description}</p>
        {/* <p className="flower-symbolism"><strong>Symbolism:</strong> {flower.symbolism.join(', ')}</p>
        <p className="flower-fragrance"><strong>Fragrance:</strong> {flower.fragrance}</p>
        <p className="flower-history"><strong>History:</strong> {flower.history}</p> */}
      </div>
    </div>
  );
};

export default FlowerCard;
