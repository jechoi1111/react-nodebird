import React from 'react';
import 'antd/dist/reset.css';
import PropTypes from 'prop-types';
import Head from 'next/head'; // head 변경

// 해당 페이지는 pages들의 공통 부분 (_app.js)

const App = ({ Component }) => {
   return (
      <>
         <Head>
            <meta charSet="utf-8" />
            <title>Node Bird</title>
         </Head>
         <Component />
      </>
   );
};

App.propTypes = {
   Component: PropTypes.elementType.isRequired,
};

export default App;
