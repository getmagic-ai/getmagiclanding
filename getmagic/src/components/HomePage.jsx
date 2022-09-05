import React, { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Features from './Features.jsx'
import logo from './../assets/newImg.png'
import hero from './../assets/creatorHeaderImg.png'
import Search from './Search.jsx'
import MenuTest from './MenuTest.jsx'
import Input from './Input.jsx'
import Footer from './Footer.jsx'
import Example from './Tabs.jsx'
export default function HomePage() {


    return (
        <div class="bg-purple-100">
            <div class="mx-20 bg-yellow-200">
                <div class="flex bg-yellow-100 flex-row align-middle">

                    <Nav />
                    <MenuTest menu="Test" />
                    <Search type="Brands!!" />
                    {/* <Example /> */}//Tabs stuff
                    {/* <Menu /> */}
                </div>
                <section id="heroandfeatures" class="bg-blue-200 flex-col space-y-30 align-middle">

                    <div class="flex items-stretch mx-20">
                        <Card image={logo} />
                        <Features />
                    </div>
                    <div className="bg-blue-200 flex items-stretch mx-20">
                        <Card class="ml-40" image={hero} />
                        <Input />
                    </div>

                </section>

                <div class="container h-20 bg-yellow-200 flex flex-row mt-8 justify-center mx-auto" id="footer">

                    <Footer />
                </div>

            </div>

        </div>


    )
}

