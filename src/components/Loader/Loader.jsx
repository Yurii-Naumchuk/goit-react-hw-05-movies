import { Vortex } from 'react-loader-spinner';
import { Component } from 'react';


// import 'react-toastify/dist/ReactToastify.css';
export class Loader extends Component {
  render() {
    return (
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    );
  }
}
