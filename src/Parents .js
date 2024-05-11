import React from 'react'
import User from './User'
Class User extends React.Component{
    render()
    {
        console.warn("Rander Method" ,this.props)
        return(
            <div>
                <h1>User Components{this.props.name}</h1>
            </div>
        )
    }
}
export default User;