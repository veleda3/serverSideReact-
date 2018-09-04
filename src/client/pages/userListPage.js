import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

class UserList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderList() {
        return this.props.users.map(user =>  <li key={user.id}>{user.name}</li>)
    }

    render() {
        return ( <div>
                display all users:
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {users}
    
}

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}

export default {
    component: connect(mapStateToProps, {fetchUsers})(UserList),
    loadData
}
