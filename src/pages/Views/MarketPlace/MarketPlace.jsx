import ProductCard from '../../../components/all/ProductCard/ProductCard';
import ProductFilter from '../../../components/all/ProductFilter/ProductFilter';
import './MarketPlace.css';

const MarketPlace = () => {
  const mapObjects = [
    {
      id: 1,
      nombre: 'Café en Grano',
      categoria: 'Café',
      tipo: 'Grano',
      precio: 12900,
      descripcion:
        'Café de alta calidad en grano para preparar bebidas deliciosas.',
      imagen: 'https://placekitten.com/200/300',
      detalles: {
        origen: 'Colombia',
        notas_sabor: ['caramelo', 'frutas cítricas'],
        tueste: 'Medio',
      },
    },
    {
      id: 2,
      nombre: 'Prensa Francesa',
      categoria: 'Métodos de Preparación',
      tipo: 'Prensa Francesa',
      precio: 29900,
      descripcion:
        'Prensa Francesa de acero inoxidable para preparar café rico en sabor.',
      imagen: 'https://placekitten.com/200/200',
      detalles: {
        capacidad: '34 oz',
        material: 'Acero inoxidable',
        color: 'Plateado',
      },
    },
    {
      id: 3,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 4,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 5,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 6,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 7,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 8,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 9,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 10,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 11,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
    {
      id: 12,
      nombre: 'Greca Italiana',
      categoria: 'Métodos de Preparación',
      tipo: 'Greca Italiana',
      precio: 24500,
      descripcion: 'Greca italiana clásica para hacer café espresso en casa.',
      imagen: 'https://placekitten.com/300/200',
      detalles: {
        capacidad: '6 tazas',
        material: 'Aluminio',
        color: 'Negro',
      },
    },
  ];
  return (
    <div className='marketPlace_container'>
      <section className='marcketPlace_content'>
        <div className='row products'>
          {/* producto */}
          {mapObjects.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </section>
      <ProductFilter />
    </div>
  );
};

export default MarketPlace;
