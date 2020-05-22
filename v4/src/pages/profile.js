import React, { Component } from 'react'

export class profile extends Component {
      
    render() {
        const  profileId = this.props.match.params.userId;
        return (
            <div>
                {profileId}
            </div>
        )
    }
}

export default profile
