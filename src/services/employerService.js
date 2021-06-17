import axios from 'axios'
import React from 'react'

export default class EmployerService {
    getEmployers()
    {
        return axios.get("http://localhost:8080/api/employer/getAll");
    }
    getEmployersById(id){
        return axios.get("http://localhost:8080/api/employer/getById?id"+id);
    }
    
}
