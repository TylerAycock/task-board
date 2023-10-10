import './Navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {

    const [search, setSearch] = useState('')


    return (
        <div className='navbar'>
            <div className='search'>
                <AiOutlineSearch className='icon'  size = '10x'/>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <h1 className='title'>Task List</h1>
        </div>
    )
}

export default NavBar