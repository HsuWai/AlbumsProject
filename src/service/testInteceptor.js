import axios from 'axios'

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function(request) {
       
        request.headers = {'Test': 'TestRequest'}
        console.log(request)
        return request
    }, function (error) {
                // Do something with request error
                
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        response.statusText = 'Test Status Text'
        return response
    },function(error){
        
    }
)

export default axiosInstance

