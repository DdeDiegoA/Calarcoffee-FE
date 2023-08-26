import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import DashboardIndexView from '../Views/Dashboard/DashboardIndexView';
import './DashboardIndex.css';
const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <DashboardIndexView />
    </DashboardLayout>
  );
};

export default DashboardIndex;
