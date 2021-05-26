import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Provider} from 'react-redux';
import store from './store';
import Form from './form';

class TestComp extends Component {
  state= {initialValues: null};
  constructor(props){
    super(props);
  }
  setInitialValue = () => {
    this.setState({ initialValues: { firstName: 'Azxy out', lastName: 'user out' } })
  }
  render() {
    return (
      <>
        <Form initialValues={this.state.initialValues} />
        <button onClick={this.setInitialValue}>initialize from out</button>
      </>)
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <TestComp/>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
