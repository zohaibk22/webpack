import axios from 'axios'

const generateJoke = () => {
    const axiosConfig = {
        headers: {
            Accept: 'application/json',
        },
    }
 
     axios.get('https://icanhazdadjoke.com', axiosConfig).then((res)=> {
         document.getElementById('joke').innerHTML = res.data.joke
        
     }).catch((error) => {
         console.log(error)
     })

    return "I dont trust stairs. they are always up to somehting"
}

export default generateJoke