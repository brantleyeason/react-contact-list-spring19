import React from 'react';
import { Table, Label, Button } from 'semantic-ui-react';

const Contact = ({ firstName, phone }) => (
  <Table.Row>
    <Table.Cell>
      <Label>{firstName}</Label>
    </Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color='blue'>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)

export default Contact