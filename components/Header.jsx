import React from 'react';
import Title from './Header/Title.jsx';

class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <textarea rows="100" cols="100" value={this.props.title} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col-md-6">
            <Title title={this.props.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
