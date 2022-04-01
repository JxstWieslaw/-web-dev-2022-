import React, { Component } from "react";

/* This is a class component*/
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody />
  );
};


/* Note that if the return is contained to one line, it does not need parentheses.*/

const SimpleComponent = () => {
    return <div>Example</div>
  }

  class ClassComponent extends Component {
    render() {
      return <div>Example</div>
    }
  }

export default Table;
