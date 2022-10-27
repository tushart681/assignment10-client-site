import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { useContext } from 'react';
import { authContext } from '../../context/authprovider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import {HiOutlineMail} from 'react-icons/hi'

const Home = () => {
    const premiumCourse = useLoaderData()
    const {loginProvider} = useContext(authContext)
    const googleProvieder = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = () => {
        loginProvider(googleProvieder)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const handleEmailSignIn = () => {
        loginProvider(githubProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <h1>Welcome to Learning Camp</h1>
            <h1>Learn to Easy</h1>
            <Button onClick={handleGoogleSignIn} variant="primary"><FaGoogle /> Login With Google</Button>{' '}
            <Button onClick={handleEmailSignIn} variant="info"><FaGithub /> Login With Github</Button>{' '}
            <Button onClick={handleEmailSignIn} variant="info"><HiOutlineMail /> Login With email</Button>{' '}
            <br />
            <br />
            
            <div className='d-flex gap-4'>
            {
               premiumCourse.map(premium => <HomeCard key={premium._id} premium={premium}></HomeCard> ) 
            }
            </div>

        </div>
    );
};

export default Home;