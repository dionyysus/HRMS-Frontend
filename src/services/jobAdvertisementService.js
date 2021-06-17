import axios from 'axios'

export default class JobAdvertisementService {
   getJobAdvertisement()
   {
       return axios.get("http://localhost:8080/api/jobAdvertisement/getAllActiveJobAdvertisementByEmployer");
   }
   
   getByJobId(id){
       return axios.get("http://localhost:8080/api/jobAdvertisement/findByJobAdvertisementIsActive");
   }

   addJobAd(values){
       return axios.post("http://localhost:8080/api/jobAdvertisement/add",values);
   }
}
