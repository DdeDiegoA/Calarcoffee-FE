import Header from '../../components/header/Header';
import PropTypes from 'prop-types';
import './MainLayout.css';
import GeneralSpinner from '../../components/all/Spinner/generalSpinner';
import { useEffect } from 'react';
import Api from '../../services/Api';
import { connect } from 'react-redux';
import { getUserData } from '../../stores/actions/userActions';

const MainLayout = (props) => {
  const {
    userReducer: { user_data },
    getUserData,
    children,
  } = props;

  useEffect(() => {
    if (Api.haveToken() && user_data === null) {
      getUserData();
    }
  }, []);

  return (
    <>
      <GeneralSpinner />
      <div className='main_layout'>
        <Header />
        <main className='main_container'>{children}</main>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  getUserData: PropTypes.func,
  userReducer: PropTypes.object,
};

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

const mapDispatchToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
