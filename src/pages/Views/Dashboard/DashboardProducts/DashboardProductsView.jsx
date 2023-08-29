import ProductsTable from '../../../../components/all/ProductsTable/ProductsTable';

const DashboardProductsView = () => {
  const data = [
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
    {
      id: 3123123,
      product_name: 'Cafe Calarca 160gr',
      amount: 31,
      category: 'Cafe',
      unit_price: 40000,
    },
  ];
  return (
    <div className='index_dashboard-container'>
      <h2>products</h2>
      <div className='d-flex flex-column'>
        <button className='mb-3 btn align-self-end btn-success'>
          Crear Producto
        </button>
        <ProductsTable data={data} />
      </div>
    </div>
  );
};

export default DashboardProductsView;
