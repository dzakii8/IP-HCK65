import { setDataPassword } from "./fetchSlice"
import axios from "axios"

export const getDataPassword = () =>{
  return async(dispatch)=>{
    try {
      const { data } = await axios.get('http://localhost:3000/savePassword', {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`
        }
      })
      dispatch(setDataPassword(data))
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}