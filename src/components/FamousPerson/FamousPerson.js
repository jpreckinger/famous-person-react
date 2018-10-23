import React, { Component } from 'react';

class FamousPerson extends Component {

    state = {
        person: {
            name: '',
            role: ''
        }
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState( {
                person: {
                ...this.state.person,
                [propertyName]: event.target.value,
                }
            });
        }
    }

    logPerson = (event) => {
        console.log(this.state.person);
    }

  render() {
    return (
     <section>
         <input onChange={this.handleChangeFor('name')} placeholder="name" />
         <input onChange={this.handleChangeFor('role')} placeholder="role" />
         <button onClick={this.logPerson}>Submit</button>
        <p>{this.state.person.name} is famous for {this.state.person.role}</p>
     </section>
    );
  }
}

export default FamousPerson;
