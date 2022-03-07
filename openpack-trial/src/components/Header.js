import logo from '../images/openpack_Logo_pos_RGB-1.png';
import { BellIcon } from '@heroicons/react/solid';

const Header = (props) => {



    return (
        <header>
            <img src={logo}></img>
            <input type='search' placeholder='Search documents, machines, spare parts etc.'></input>
            <div>
                <span>Good Morning</span>
                <BellIcon className="h-5 w-5 text-blue-500"/>
                <p>Avatar</p>
            </div>
        </header>
        
    );
};

export default Header; 