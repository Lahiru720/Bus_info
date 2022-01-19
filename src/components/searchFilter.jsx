import Mockdata from '../MOCK_DATA.json';
import { useState } from "react";


const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    return ( 
        <div className="container">
            <input
            type="text"
            placeholder="Search.." className="form-control" style={{marginTop:50, marginBottom:20, width:"40%"}}
            
            onChange={(e)=>{
              setsearchTerm(e.target.value);  
            }}/>
            
<table className="table table-bordered">
    <thead className="thead-dark">
        <tr>
            <th>Root Number</th>
            <th>Bus Name</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Intermediate stops</th>

        </tr>
    </thead>
    <tbody>
        {Mockdata.filter(val=>{
            if(searchTerm ===''){
                return val;
            }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.gender.toLowerCase().includes(searchTerm.toLowerCase()) || 
            val.ma.toLowerCase().includes(searchTerm.toLowerCase()) )
            {
                return val;
            }
        }).map((m)=>(
            <tr key={m.id}>
                <td>{m.first_name}</td>
                <td>{m.last_name}</td>
                <td>{m.email}</td>
                <td>{m.gender}</td>
                <td>{m.ma}</td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
     );
}
 
export default SearchTable;