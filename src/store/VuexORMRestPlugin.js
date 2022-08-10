import axios from 'axios'

export default {
    install ({Model}, config) {
        Model.$get=function() {
            return axios.get(`https://jsonplaceholder.typicode.com/${this.entity}`)
            .then(response => {
                console.log('$Get response:', response);
                this.insert({
                    data: response.data
                })

                return response
            })
        }
    }
}