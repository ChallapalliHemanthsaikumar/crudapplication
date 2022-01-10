import axios from 'axios';
const userurl = "http://localhost:8080/";


// export const getUsers = async(id) =>{
//     id = id||'';
//     return await axios.get(`${userurl}/${id}`);
// }
// export const addUser = async (user) =>{
//     return await axios.post(`${userurl}/add`,user)
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${userurl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${userurl}/${id}`, user)
// }
export const Edit = async(data) => {

    return await axios.post(userurl+"edit",data).then(response  =>{ return response }).catch(error => {
        console.log(error);
    })
}
export const Deleteitem = async(data) => {

    return await axios.post(userurl+"delete",data).then(response  =>{ return response }).catch(error => {
        console.log(error);
    })
}

export const add = async(data) => {

    return await axios.post(userurl+"add",data).then(response  =>{ return response }).catch(error => {
        console.log(error);
    })
}
export const list = async() => {

    return await axios.get(userurl+"list").then(response  =>{ return response }).catch(error => {
        console.log(error);
    })
}

export const get = async(data) => {

    return await axios.post(userurl+"get",data).then(response  =>{ return response }).catch(error => {
        console.log(error);
    })
}