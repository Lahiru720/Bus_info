import Mockdata from '../MOCK_DATA.json';
const SearchTable = () => {
    return ( 
        <div>
<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>

        </tr>
    </thead>
    <tbody>
        {Mockdata.map((m)=>(
            <tr key={m.id}>
                <td>{m.first_name}</td>
                <td>{m.last_name}</td>
                <td>{m.email}</td>
                <td>{m.gender}</td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
     );
}
 
export default SearchTable;