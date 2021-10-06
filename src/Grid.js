import './App.css';
import ImageCell from './ImageCell.js';
import React from 'react';

class Grid extends React.Component {
  render() {
    const { imageList } = this.props;
    let rows = [];

    while (imageList.length) {
      rows.push(imageList.splice(0, 5));
    }

    rows.map((subList, i) => {
      return subList;
    });

    return (
      <table className="grid">
        <tbody>
          {rows.map((subList, i) => (
            <Row key={'row' + i} subList={subList} />
          ))}
        </tbody>
      </table>
    );
  }
}

function Row({ subList }) {
  return (
    <tr>
      {subList.map((img, i) => (
        <td>
          <ImageCell key={'cell' + i} imageObject={img} />
        </td>
      ))}
    </tr>
  );
}

export default Grid;
