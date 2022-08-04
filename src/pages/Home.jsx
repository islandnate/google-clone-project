import React from 'react';
import './home.css'
import { Link } from "react-router-dom"
import AppsIcon from "@mui/icons-material/Apps"
import { Avatar } from "@material-ui/core"
import Search from './Search';


const Home = () => {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__header--left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__header--right">
                    <Link to="mail.google.com">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                <div className="home__input--container">
                    <Search />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='react__logo' />
                </div>
            </div>
        </div>
    );
}

export default Home;
