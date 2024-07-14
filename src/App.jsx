import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityList from './components/ActivityList/ActivityList.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <ActivityList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
