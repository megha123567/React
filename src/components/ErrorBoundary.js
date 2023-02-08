import React from 'react';
import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './MyErrorBoundary';
import { useNavigate } from 'react-router-dom';

class App extends React.Component {
  // refreshPage = () => {
  //   history.go(0);
  // };
  

  render() {
    return (
      <div>
        <br/>
        <MyErrorBoundary>
          <BuggyCounter />
        </MyErrorBoundary>
        <br/>
        {/* <button onClick={Feature}>Features</button> */}
      
      </div>
    );
  }
}

export default App;
