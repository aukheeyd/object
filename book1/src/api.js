import axios from 'axios'

export function getBooksList(){
 return  axios.get(`/books`)


}