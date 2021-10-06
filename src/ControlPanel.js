import './App.css';
import React from 'react';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.liftInputs = this.liftInputs.bind(this);
    this.storeEmbedCodeURL = this.storeEmbedCodeURL.bind(this);
    this.storeQuantity = this.storeQuantity.bind(this);
    this.storeDataCenter = this.storeDataCenter.bind(this);
    this.storeProxyURL = this.storeProxyURL.bind(this);
    this.state = {
      embedCodeURL: 'https://itc.nhl.com/p/rp/7430706cf550e547.png?mi_fav_team=FLA',
      quantity: 5,
      dataCenter:'',
      proxyURL:'',
    };
  }

  liftInputs({ embedCodeURL }) {
    this.props.handleInputs(this.state);
  }

  storeEmbedCodeURL(e) {
    let embedCodeURL = e.target.value || '';
    embedCodeURL = embedCodeURL.trim();
    this.setState({ embedCodeURL });
  }

  storeQuantity(e) {
    let quantity = e.target.value;
    quantity = parseInt(quantity);
    this.setState({ quantity });
  }

  storeDataCenter(e) {
    let dataCenter = e.target.value;
    this.setState({ dataCenter });
  }
  
  storeProxyURL(e) {
    let proxyURL = e.target.value;
    this.setState({ proxyURL });
  }

  render() {
    return (
      <div className="control-panel">
        <p>Image URL:</p>
        <input type="text" name="name" id="image-link" onChange={this.storeEmbedCodeURL} />
        <p>Proxy URL:</p>
        <input type="text" name="proxy" id="proxy-url" onChange={this.storeProxyURL} />
        <p>Quantity:</p>
        <select name="quantity" id="quantity" onChange={this.storeQuantity}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <p>Data-Center:</p>
        <select name="quantity" id="data-center" onChange={this.storeDataCenter}>
          <option value="">auto</option>
          <option value="iad">East Coast (iad)</option>
          <option value="rld">West Coast (rld)</option>
        </select>
        <button className="cp-button" onClick={this.liftInputs}>
          multiply
        </button>
      </div>
    );
  }
}

export default ControlPanel;
