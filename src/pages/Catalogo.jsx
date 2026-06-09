import ProductCard from '../components/ProductCard';

export default function Catalogo() {
  const destacados = [
    { id: 'p1', title: 'Gigabyte GeForce RTX 2060 Windforce', image: '/images/GPU.png', desc: 'Gráficos potentes con Ray Tracing. 6GB GDDR6.', price: '$320.000' },
    { id: 'p2', title: 'Ryzen 7 5000', image: '/images/Ryzen 7.jpg', desc: 'Procesador AMD para multitarea y videojuegos.', price: '$180.000' },
    { id: 'p3', title: 'Disco Duro HDD 1TB', image: '/images/HDD.png', desc: 'Almacenamiento confiable.', price: '$45.000' },
    { id: 'p4', title: 'Unidad SSD 1TB', image: '/images/SSD.png', desc: 'Mayor velocidad de carga.', price: '$75.000' },
    { id: 'p5', title: 'Fuente de Poder 650W 80 Plus', image: '/images/Fuente de poder.png', desc: 'Potencia estable y eficiente.', price: '$68.000' },
    { id: 'p6', title: 'Memoria RAM 16GB DDR4', image: '/images/RAM.png', desc: 'Rendimiento fluido en multitarea.', price: '$52.000' }
  ];

  const tarjetas = [
    { id: 'g1', title: 'AMD Radeon RX 6500 XT', image: '/images/RX 6500 XT.png', desc: 'Buenas prestaciones para 1080p.', price: '$220.000' },
    { id: 'g2', title: 'NVIDIA GeForce RTX 3070', image: '/images/RTX3070.png', desc: 'Excelente para gaming en 1440p.', price: '$950.000' }
    // Puedes agregar las demás aquí siguiendo el mismo formato
  ];

  return (
    <div>
      <section id="catalogo" className="section">
        <header className="section-header"><h2>Productos Destacados</h2></header>
        <div className="grid">
          {destacados.map(prod => <ProductCard key={prod.id} {...prod} />)}
        </div>
      </section>
      
      <div className="spacer"></div>
      
      <section id="tarjetas" className="section">
        <header className="section-header"><h2>Tarjetas de Video</h2></header>
        <div className="grid">
          {tarjetas.map(prod => <ProductCard key={prod.id} {...prod} />)}
        </div>
      </section>
    </div>
  );
}