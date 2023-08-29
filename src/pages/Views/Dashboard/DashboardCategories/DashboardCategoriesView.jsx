import CategoriesTable from '../../../../components/all/CategoriesTable/CategoriesTable';

const DashboardCategoriesView = () => {
  const data = [
    {
      id: 12312,
      name: 'cafe',
    },
    {
      id: 12312,
      name: 'metodo',
    },
    {
      id: 12312,
      name: 'promocion!!',
    },
  ];
  return (
    <div className='index_dashboard-container'>
      <h2>Categories</h2>
      <div className='d-flex gap-3'>
        <CategoriesTable data={data} />
        <div className='flex-fill'>hola form</div>
      </div>
    </div>
  );
};

export default DashboardCategoriesView;
