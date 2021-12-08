import { toast } from "react-toastify";
import axios from "util/Api";
import statusCode from "util/status-codes";


export const post = (type, form_inputs)=>{
  const urls = {
    add_credential: '/api/credentials/',
    add_urlwise_credential: '/api/credentials/urlwise/',
  }
  return new Promise((resolve, reject)=>{
    axios.post(urls[type], form_inputs)
      .then(resp => resp.status === 201 && resolve(resp.data))
      .catch(err=>{
        console.log(err.message)
        err.response
          ? toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
          : toast.error(err.message)
        reject()
      })
  })
}


export const put = (type, form_inputs)=>{
  const urls = {
    update_credential: `/api/credentials/${form_inputs.id}/`,
    update_urlwise_credential: `/api/credentials/urlwise/${form_inputs.id}/`,
  }
  return new Promise((resolve, reject)=>{
    axios.put(urls[type], form_inputs)
      .then(resp => resp.status === 200 && resolve(resp.data))
      .catch(err=>{
        console.log(err.message)
        try{
          toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
        } catch {toast.error(err.message)}
        reject()
      })
  })
}


export const del = (type, id)=>{
  const urls = {
    delete_credential: `/api/credentials/${id}/`,
    delete_urlwise_credential: `/api/credentials/urlwise/${id}/`,
  }
  return new Promise((resolve, reject)=>{
    axios.delete(urls[type])
      .then(resp => resp.status === 204 && resolve({success: true}))
      .catch(err=>{
        console.log(err.message)
        toast.error(`${err.response.status} - ${statusCode[err.response.status]}`)
        reject()
      })
  })
}


export const getSiteTitle = (site_url)=>{
  return new Promise((resolve, reject)=>{
    axios.get(`https://textance.herokuapp.com/title/${site_url}`)
      .then(resp => resp.status === 200 ? resolve(resp.data) : reject())
      .catch((err)=>console.log(err.message))
  })
}