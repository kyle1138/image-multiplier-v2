import './App.css';
import ControlPanel from './ControlPanel.js';
import Grid from './Grid.js';
import React from 'react';
import { getMultipleImages, parsedRequestObject, setDataCenter } from './utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { embedCodeURL: '' };
    this.state = { imageList: [] };
    this.handleInputs = this.handleInputs.bind(this);
  }

  async handleInputs(inputState) {
    let { embedCodeURL, quantity, dataCenter,proxyURL } = inputState;
    embedCodeURL = embedCodeURL && dataCenter ? setDataCenter(embedCodeURL, dataCenter) : embedCodeURL;
    const imageRequests = await getMultipleImages(embedCodeURL,  proxyURL, quantity);
    const imageList = imageRequests.map(parsedRequestObject);
    this.setState({ imageList });
  }

  render() {
    const imageList = this.state.imageList;

    return (
      <div className="App">
        <ControlPanel handleInputs={this.handleInputs} />
        <Grid imageList={imageList} />
      </div>
    );
  }
}

export default App;
