import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      {id:1, firstName: 'Bob', phone: '123-555-1234'},
      {id:1, firstName: 'Rob', phone: '123-555-1235'},
      {id:1, firstName: 'Tod', phone: '123-555-1236'}
    ]
  }

  render() {
    const { contacts } = this.state
    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <Contacts contacts={contacts}/>
      </Container>
      
    );
  }
}

export default App;
