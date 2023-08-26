import MetricInfo from '../../components/all/MetricInfo/MetricInfo';
import StockTable from '../../components/all/StockTable/StockTable';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './DashboardIndex.css';
const DashboardIndex = () => {
  const stock = [
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
    <DashboardLayout>
      <div className='index_dashboard-container'>
        <section className='section_stock'>
          <h3>Stock</h3>
          <div>
            <StockTable data={stock} />
          </div>
        </section>
        <section className='section_metrics'>
          <h3>Informacion</h3>
          <div className='section_metrics-infos'>
            <MetricInfo
              amount={10}
              icon='bi bi-clock'
              subject='Envios'
              title='Envios pendientes'
            />
            <MetricInfo
              amount={10}
              icon='bi bi-clock'
              subject='Envios'
              title='Envios pendientes'
            />
            <MetricInfo
              amount={10}
              icon='bi bi-clock'
              subject='Envios'
              title='Envios pendientes'
            />
            <MetricInfo
              amount={10}
              icon='bi bi-clock'
              subject='Envios'
              title='Envios pendientes'
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
