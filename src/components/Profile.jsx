import React from 'react'
import Ben from '../assets/ben.png'

const Profile = () => {
    return (
        <div className='profile'>
            <h1 className='profile_title'>Hello, I'm Your Friendly Neighborhood Code Wizard!</h1>
            <h2 className='profile_title2'>Benedict Omondi</h2>
            <div className='profile_info'>
                <div className='description'>
                <p className='profile_description'>I'm a skilled React and Django developer who transforms ideas into clean,<br/> functional code while ensuring seamless data management with PostgreSQL and MySQL. <br/>Passionate about creating intuitive user experiences and solving complex technical challenges, I thrive on building robust, well-connected systems.<br/> Let's collaborate on your next project—combining expertise, creativity, and a touch of humor to craft powerful, enjoyable software.
                </p>
                </div>
                <div className='imagess'>
                    <img className='profile_image' src={Ben} alt="Profile" />
                </div>
                <button className='contact_me'>Contact me</button>

                    
            </div>
        </div>
    )
}

export default Profile
