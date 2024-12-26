import ReactDOM from 'react-dom';

const Portal = ({ children }) => ReactDOM.createPortal(children, document.getElementById('portal-root'));

export default Portal;
