import MyData from '../../../components/all/MyData/MyData';
import MyOrdersTable from '../../../components/all/MyOrdersTable/MyOrdersTable';
import './MyProfileView.css';
const MyProfileView = () => {
  const myOrdersData = [
    {
      id: 2,
      bill_number: 'F1323e2312',
      state: {
        state_id: 2,
        state_name: 'En camino',
      },
    },
    {
      id: 3,
      bill_number: 'F1d23e2312',
      state: {
        state_id: 1,
        state_name: 'Pendiente',
      },
    },
    {
      id: 4,
      bill_number: 'F412331e1233',
      state: {
        state_id: 3,
        state_name: 'Entregado',
      },
    },
    {
      id: 5,
      bill_number: 'F0p312313',
      state: {
        state_id: 2,
        state_name: 'En camino',
      },
    },
  ];
  return (
    <div className='row gap-3'>
      <div className='col-lg-6 flex-grow-1 changes_data_container'>
        <MyData />
        <div className='w-100 d-flex justify-content-center'>
          <button>Guardar cambios</button>
        </div>
      </div>
      <div className='col-lg-4  flex-grow-1 my_orders'>
        <MyOrdersTable data={myOrdersData} />
      </div>
    </div>
  );
};

export default MyProfileView;
