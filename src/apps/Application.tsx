import React from 'react';

import NonAuthApp from './NonAuthApp/NonAuthApp';

import '../sass/styles.scss';

function Application() {
  return (
    <div className="App">
      <NonAuthApp />
    </div>
  );
}

export default Application;
