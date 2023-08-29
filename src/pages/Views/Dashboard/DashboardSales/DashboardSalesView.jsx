import SalesTable from '../../../../components/all/SalesTable/SalesTable';

const DashboardSalesView = () => {
  const data = [
    {
      bill_number: 'F2312312',
      product_name: 'Calarca geisha 360gr',
      total_price: 45000,
      status: {
        state_id: 3,
        state_name: 'Entregado',
      },
    },
  ];
  return (
    <div className='index_dashboard-container'>
      <h2>sales</h2>
      <SalesTable data={data} />
    </div>
  );
};

export default DashboardSalesView;
