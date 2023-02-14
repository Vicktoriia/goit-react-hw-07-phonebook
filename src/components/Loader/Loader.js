import React from 'react';
import PropTypes from 'prop-types';
import { Puff } from 'react-loader-spinner';

const Loader = () => (
  <div>
    <Puff
      height="50"
      width="50"
      radius={1}
      color="orange"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      timeout={500}
    />
  </div>
);
Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
