export default function ProductCard({ id, title, image, description, price }) {
  return (
    <article className="producto" aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <img src={image} alt={title} loading="lazy" width="300" />
      <p>{description}</p>
      <p className="precio"><strong>Precio:</strong> {price}</p>
      <button type="button" className="btn">Comprar ahora</button>
    </article>
  );
}