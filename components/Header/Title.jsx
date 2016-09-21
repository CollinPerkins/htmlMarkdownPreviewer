import React from 'react';
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '#hello, markdown!';

class Title extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(this.props.title) }}>
      </div>
    );
  }
}

export default Title;
