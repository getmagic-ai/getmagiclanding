import React, { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Features from './Features.jsx'
import logo from './../assets/cardImg2.png'
import hero from './../assets/creatorHeaderImg.png'
import Search from './Search.jsx'
import Menu from './Menu.jsx'
import Input from './Input.jsx'
export default function HomePage() {


    return (
        <div>
            <div class="flex flex-row align-middle">
               
                <Nav />
                <Search type="Brands!!" />
                <Menu />
            </div>
            <section id="homepagecontainer" class="flex flex-col space-y-60">

                <div class="flex flex-row mx-4 mt-4 space-x-50">
                    <Card image={logo} />
                    <Features />
                </div>
                <Card class="px-50 mx-10 " image={hero} />
                <Input />
            </section>

        </div>


    )
}

