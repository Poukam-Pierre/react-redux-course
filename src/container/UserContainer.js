import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ fetchUsers, usersData }) {

    useEffect(() => {
        fetchUsers()
    }, [])

    return usersData.loading ? (
        <h2>Loading...</h2>
    ) : usersData.error ? (
        <h2>{usersData.error}</h2>
    ) : (
        <div>
            <h2>User list</h2>
            <div>
                {usersData.data.map(user => <p>{user.name}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);