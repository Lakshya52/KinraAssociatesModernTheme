import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-15 py-5  bg-[#2c2c2c]/90 text-white shadow-xl shadow-[#5a6bdd]/10'>

            {/* logo */}
            <div>
                <Link to="/" className='outline-none focus:outline-none' >
                    <p className=" text-3xl font-playfair-display font-extrabold">Kinra & Associates </p>
                    <p className=" text-lg font-playfair-display font-extrabold">Chartered Accountants </p> 
                </Link>
            </div>

            {/* nav Links */}
            <ul className='flex gap-10 text-lg  items-center' >
                <Link className='li-custom' to="/about" >About</Link >
                <Link className='li-custom' to="/industries" >Industries</Link >
                <Link className='li-custom' to="/leaderships" >Our Leaderships</Link >
                <Link className='li-custom' to="/services" >Services</Link >
                <Button label='Contact' href='/contact' b_radius='10px' />
            </ul>
        </div>
    )
}

export default Navbar