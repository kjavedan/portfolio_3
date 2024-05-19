import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function MainLayout({ children }) {
  return (
    <div className="b-solid b-red relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
