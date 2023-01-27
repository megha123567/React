import React from 'react';
import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './MyErrorBoundary';

class App extends React.Component {
  // refreshPage = () => {
  //   history.go(0);
  // };

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <BuggyCounter />
        </MyErrorBoundary>
      
      </div>
    );
  }
}

export default App;
