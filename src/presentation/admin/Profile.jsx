import React from 'react'
import BgProfile from '../../assets/bg-profile.jpg'

const Profile = ({ ...props }) => {

    return (
        <div {...props} >
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + `https://picsum.photos/seed/1/900/500` + ")" }}
            ></div>
        </div>
    )
}

export default Profile