import axios from 'axios'

export default class workHourService
 {
   getWorkHour(){
       return axios.get("http://localhost:8080/api/workHours/getall");
   }
}
