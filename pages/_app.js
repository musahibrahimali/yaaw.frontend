import PropTypes from 'prop-types';
import { HeadTag } from '../components/components'
import '../styles/globals.css'

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <HeadTag />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
