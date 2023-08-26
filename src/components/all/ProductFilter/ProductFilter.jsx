import CollapseComponent from '../CollapseComponent/CollapseComponent';
import './ProductFilter.css';

const ProductFilter = () => {
  return (
    <aside className='marcketPlace_filters'>
      <CollapseComponent
        superTitle={'Filtros'}
        target={'Filters'}
        open={false}
        extraClassName={'marcketPlace_filters_principal_collapser'}
      >
        <div className='marcketPlace_filters_content'>
          <CollapseComponent title={'hola'} target={'hola-p'} open={true}>
            <p>hola</p>
          </CollapseComponent>
          <CollapseComponent title={'esta'} target={'esta-p'} open={true}>
            <p>esta es</p>
          </CollapseComponent>
          <CollapseComponent title={'prueba'} target={'prueba-p'} open={true}>
            <p>una prueba</p>
          </CollapseComponent>
        </div>
      </CollapseComponent>
    </aside>
  );
};

export default ProductFilter;
