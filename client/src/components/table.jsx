import Table from 'react-bootstrap/Table';

function DataSection(props) {
    console.log("pro",props);
  return (
    <Table bordered hover style={{ textAlign:"center"}}>
      <tbody>
        <tr>
          <td style={{width:"30%"}}>{props.dep_Name}</td>
          <td style={{width:"30%"}}>{props._id}</td>
          <td style={{width:"10%"}}>{props.applyMerit}</td>
          <td style={{width:"30%"}}>{props.fee}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DataSection;