import React from 'react';
import '../../styles/button.css';
import './Counter.css';

const Display = (props: { count: number }) => (
  <span className='display'>{props.count}</span>
);
const CounterBtn = (props: { name: string; onClick: () => void }) => (
  <button className='btn btn-md' onClick={props.onClick}>
    {props.name}
  </button>
);

export class Counter extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  decreaseCount() {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }

  render() {
    return (
      <div className='container'>
        <Display count={this.state.count} />
        <div className='btn-container'>
          <CounterBtn name={'-'} onClick={() => this.decreaseCount()} />
          <CounterBtn name={'+'} onClick={() => this.increaseCount()} />
        </div>
      </div>
    );
  }
}
