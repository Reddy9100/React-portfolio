import React from 'react'
import "./Home.css"
import { IoLogoInstagram } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='home-con'>
        <div className='inner-home'>
            <h1 className='home-head'>Lorem Ipsum</h1>
            <br />
            <p className='home-para'>auifhd sadfihsdkaf dsfabsdafd fsdajfsdjf dsafbvhbvsdahjf sdafgbvgsdfjads afsdjafhsdj fsdajfbsd fjsdvfghvd fjgsdjafgsdjf dsfjgdsfjad fsdjfasdjfb sdafjsdgavfjsd fsdajfg</p>
            <br/>
            <div className='icons-home'>
                    <BsFacebook className='icon-home-fb'/>
                    <FaLinkedin className='icon-home-link'/>
                    <FaSquareGithub className='icon-home-git'/>
                    <IoLogoInstagram className='icon-home-insta'/>
            </div>
            <br/>
            <button className='home-btn'>Download Resume</button>
        </div>
        <div className='image-con'>
            <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-870.jpg?w=826&t=st=1708426423~exp=1708427023~hmac=908bfc27c570b930f9673d91a6870cfd71b9caa3b6e9f823c2178fa87b4ecca4' className='home-img' alt="home-img"/>
        </div>
    </div>
  )
}

export default Home