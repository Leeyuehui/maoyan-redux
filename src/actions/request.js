import axios from 'axios'

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const request = ({
    url,
    headers,
    params,
    data,
    method
}) => {
    return new Promise( (resolve , reject) => {
        switch ( method ) {
            case 'POST':
                axios( {
                    url,
                    data,
                } ).then( res => resolve( res ))
                .catch( err => reject( err ))
                break;
        
            default:
                axios({
                    url,
                    params
                }).then( res => resolve( res ) )
                .catch( err => reject( err ) )
                break;
        }
    } )
}
export default request