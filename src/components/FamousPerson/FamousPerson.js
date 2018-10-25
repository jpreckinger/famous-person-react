import React, { Component } from 'react';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

class FamousPerson extends Component {

    state = {
        person: {
            name: '',
            role: ''
        },
        people: []
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
        event.preventDefault();
        console.log(this.state.person);
        let person = this.state.person;
        this.setState({
            people: [...this.state.people, person],
            person: {
                name: '',
                role: ''
            }
        })
    }

  render() {
    return (
    <div>
            <FamousPersonForm handleChangeFor={this.handleChangeFor}
                              person={this.state.person}
                              logPerson={this.logPerson} />
            <p>{this.state.person.name} is famous for {this.state.person.role}</p>
            <FamousPersonList list={this.state.people}/>
     </div>
    );
  }
}

export default FamousPerson;
