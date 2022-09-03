import React, { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Features from './Features.jsx'
import logo from './../assets/newImg.png'
import hero from './../assets/creatorHeaderImg.png'
import Search from './Search.jsx'
import Menu from './Menu.jsx'
import Input from './Input.jsx'
export default function HomePage() {


    return (
        <div class="bg-purple-100">
            <div class="mx-20 bg-yellow-200">
                <div class="flex bg-red-100 flex-row align-middle">

                    <Nav />
                    <Search type="Brands!!" />
                    {/* <Menu /> */}
                </div>
                <section id="heroandfeatures" class="bg-blue-200 flex-col-1 space-y-30 align-middle">

                    <div class="flex items-stretch mx-20">
                        <Card image={logo} />
                        <Features />
                    </div>
                    <Card class="px-50 mx-10 " image={hero} />
                    <Input />
                </section>
            </div>

        </div>


    )
}

