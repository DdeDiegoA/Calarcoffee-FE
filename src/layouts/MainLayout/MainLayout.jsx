import Header from '../../components/header/Header';
import PropTypes from 'prop-types';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className='main_layout'>
      <Header />
      <main className='main_container'>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
