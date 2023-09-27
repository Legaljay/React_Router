import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Nav = ()=>{
    return (
    <>
        <div className="bg-[#b5838d] hover:bg-blue-400 px-20 py-5 text-white text-lg flex justify-between ">
            <div >
                <img src={logo} alt="" className="w-20 hover:animate-bounce" />
            </div>
            <div className="flex">
                <ul className="flex gap-6 items-center">
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/About'}><li>About</li></Link>
                    <Link to={'/Contact'}><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Nav