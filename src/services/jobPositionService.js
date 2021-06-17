import axios from "axios";

export default class jobPositionService {
    
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobposition/getall");  
    }

}
