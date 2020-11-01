import React from 'react';
import searchEmployee from "../components/searchEmployee";


const Employees = (props) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">#</th>
                    <td>{props.firstname}</td>
                    <td>{props.lastname}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
};

export default Employees;