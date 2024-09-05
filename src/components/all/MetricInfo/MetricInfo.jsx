import PropsTypes from 'prop-types';
import './MetricInfo.css';
const MetricInfo = (props) => {
  const { icon, title, amount, subject } = props;
  return (
    <article className='metric-info'>
      <i className={icon} />
      <div className='metric-info_details'>
        <h4>{title}</h4>
        <h2>{amount}</h2>
        <span>{subject}</span>
      </div>
    </article>
  );
};
MetricInfo.propTypes = {
  icon: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  amount: PropsTypes.number.isRequired,
  subject: PropsTypes.string.isRequired,
};
export default MetricInfo;
