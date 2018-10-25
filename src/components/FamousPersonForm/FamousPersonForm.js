import React, { Component } from 'react';

class FamousPersonForm extends Component {


  render() {
    return (
            <form onSubmit={this.props.logPerson}>
                <input onChange={this.props.handleChangeFor('name')} placeholder="name" value={this.props.person.name} />
                <input onChange={this.props.handleChangeFor('role')} placeholder="role" value={this.props.person.role} />
                <input type='submit' text='Add person' />
            </form>
    );
  }
}

export default FamousPersonForm;
