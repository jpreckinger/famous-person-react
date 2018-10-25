import React, { Component } from 'react';

class FamousPersonList extends Component {

  render() {
    return (
        <ul>
            {this.props.list.map( (person, index) => 
            <li key={index}>{person.name} is famous for {person.role}.</li>)}
        </ul>
    );
  }
}

export default FamousPersonList;
