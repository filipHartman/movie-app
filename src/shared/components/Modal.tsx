import React from 'react';
import './Modal.css';

interface Props {
  title: string;
  render: () => any;
  close: () => any;
}

export default class Modal extends React.Component<Props, {}> {
  render() {
    return (
      <div className='modalContainer'>
        <div className='modalContent'>
          <button className='closeBtn' onClick={() => this.props.close()}>
            X
          </button>
          <h2>{this.props.title}</h2>
          {this.props.render()}
        </div>
      </div>
    );
  }
}
