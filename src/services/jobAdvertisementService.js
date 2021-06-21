import axios from 'axios'

export default class JobAdvertisementService {
   getJobAdvertisement()
   {
       return axios.get("http://localhost:8080/api/jobAdvertisement/findByJobAdvertisementIsActive");
   }
   
   getById(jobAdvertisementId){
       return axios.get("http://localhost:8080/api/jobAdvertisement/getById?id="+jobAdvertisementId);
   }

   addJobAd(values){
       return axios.post("http://localhost:8080/api/jobAdvertisement/add",values);
   }
   jobAdChangeConfirmedFalseToTrue(jobAdvertisementId){
       return axios.post("http://localhost:8080/api/jobAdvertisement/changeConfirmedFalseToTrue?id="+jobAdvertisementId);
   }
   
   jobAdRemove(jobAdvertisementId){
       return axios.post("http://localhost:8080/api/jobAdvertisement/remove?id="+jobAdvertisementId);
   }
   getAllByJobAdvertisementIsConfirmedFalse(){
       return axios.get("http://localhost:8080/api/jobAdvertisement/getAllByJobAdvertisementIsConfirmedFalse");
   }

   jobAdPassiveToActive(jobAdvertisementId){
    return axios.post("http://localhost:8080/api/jobAdvertisement/changePassiveToActive?id="+jobAdvertisementId);
}


}
