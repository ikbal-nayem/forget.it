import axios from "util/Api";


export const post = (type, form_inputs)=>{
  const urls = {
    change_password: '/api/user/change-password',
  }
  return new Promise((resolve, reject)=>{
    axios.post(urls[type], form_inputs)
      .then(resp => resp.status === 200 && resolve(resp.data))
      .catch(err=>{
        console.log(err.response)
        reject(err.response)
      })
  })
}


export const patch = (type, form_inputs)=>{
  const urls = {
    update_user_info: '/api/user/user-info',
  }
  return new Promise((resolve, reject)=>{
    axios.patch(urls[type], form_inputs)
      .then(resp => resp.status === 200 && resolve(resp.data))
      .catch(err=>{
        console.log(err.message)
        reject(err.response)
      })
  })
}
