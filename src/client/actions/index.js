
import axios from 'axios'
export const FETCH_USERS = 'fetch-users'

export const fetchUsers = () => async dispatch => {
    
    let users = await axios.get('https://react-ssr-api.herokuapp.com/users')
    
    dispatch({
        type: FETCH_USERS,
        payload: users
    })

}