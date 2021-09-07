import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUsers, getUsers } from '../redux/userActions';

function User({userData,fetchUsers}) {
    // const [users,setUsers] = useState(null);
    // const [loading,setLoading] = useState(true);
    // const [error,setError] = useState('')

    // useEffect(async()=>{
    //     let res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     let data = res.data
    //     setUsers(data);
    //     setLoading(false);
    // },[])

    useEffect(()=>{
        fetchUsers()
    },[])

    return (
        <div>
            {
            userData.loading?<h2>Loading...</h2>:userData.error!=''?<h2>{userData.error}</h2>:
            <div>
                {
                    userData.users && userData.users.map((user)=>(
                        <h4>{user.name}</h4>
                    ))
                }
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers : () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
