import PropTypes from 'prop-types';
import './DashboardLayout.css';
import SideBarMenu from '../../components/all/SideBarMenu/SideBarMenu';
import GeneralSpinner from '../../components/all/Spinner/generalSpinner';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <GeneralSpinner />
      <div className='dashboard_layout'>
        <SideBarMenu />
        <main className='dashboard_container'>{children}</main>
      </div>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
