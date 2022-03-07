import logo from '../images/openpack_Logo_pos_RGB-1.png';
import { BellIcon } from '@heroicons/react/solid';

const Header = (props) => {



    return (
        <header className="px-2 py-2 bg-white mt-0 fixed h-10 w-full z-10 top-0 flex border-b-2 justify-between">
            <img src={logo} alt="Openpack Logo"></img>
            <input type='search' placeholder='Search documents, machines, spare parts etc.' className="appearance-none border rounded w-80 text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 flex-2"></input>
            <div className="flex gap-4">
                <span className="text-gray-600 text-sm">Good Morning</span>
                <BellIcon className="h-5 w-5 text-gray-600"/>
                <p className="text-gray-600 text-sm">Avatar</p>
            </div>
        </header>
        
    );
};

export default Header; 