import { toast } from "react-toastify";
import axios from "util/Api";
import statusCode from "util/status-codes";


export const post = (type, form_inputs)=>{
  const urls = {
    add_credential: '/api/credentials/',
  }
  return new Promise((resolve, reject)=>{
    axios.post(urls[type], form_inputs)
      .then(resp => resp.status === 201 && resolve(resp.data))
      .catch(err=>{
        console.log(err.message)
        toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
        reject()
      })
  })
}


export const put = (type, form_inputs)=>{
  const urls = {
    update_credential: `/api/credentials/${form_inputs.id}/`,
  }
  return new Promise((resolve, reject)=>{
    axios.put(urls[type], form_inputs)
      .then(resp => resp.status === 200 && resolve(resp.data))
      .catch(err=>{
        console.log(err.message)
        toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
        reject()
      })
  })
}


export const del = (type, id)=>{
  const urls = {
    delete_credential: `/api/credentials/${id}/`,
  }
  return new Promise((resolve, reject)=>{
    axios.delete(urls[type])
      .then(resp => resp.status === 204 && resolve())
      .catch(err=>{
        console.log(err.message)
        toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
        reject()
      })
  })
}


export const getSiteTitle = (site_url)=>{
  return new Promise((resolve, reject)=>{
    axios.get(`http://textance.herokuapp.com/title/${site_url}`)
      .then(resp => resp.status === 200 ? resolve(resp.data) : reject())
      .catch((err)=>console.log(err.message))
  })
}