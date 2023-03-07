import Table from 'react-bootstrap/Table';

function Show({show,setid}) {

    
    

  return (
    <Table striped bordered hover  className='text-center'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
      
      {show.map(item=>{ 
        return(    <tr>
        <td>{item.name}</td>
        <td>{item.Position}</td>
        <td>{item.email}</td>
        <td><button className='btn bg-dark text-light' type="btn"  onClick={()=> setid(item.uid)}>Remove</button></td>
      </tr>)})}
    
     
      </tbody>
    </Table>
  );
}

export default Show;