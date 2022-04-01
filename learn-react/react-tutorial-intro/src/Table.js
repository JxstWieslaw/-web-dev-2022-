import React, { Component } from "react";

/* This is a class component*/
 /*properties in curly braces*/
class Table extends Component {
  render() {
      const {characterData} = this.props //DOM , if data passed down comes from a variable 
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData}/>
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

const TableBody = (props) => {
    const rows = props.characterData.map((row,index)=>{
        return(
            <tr key={index}>
                <td>
                    {row.name}
                </td>
                <td>
                    {row.job}
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
  }


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
