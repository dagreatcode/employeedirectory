import React, { Component } from 'react';
import axios from "axios";
import searchEmployee from "../components/searchEmployee";
import API from "../utils/API";

class employeeDetail extends Component {
    state = {
        employees: [],
        results: [],
        search: "",
        sortFilter: "",
      };
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default employeeDetail;