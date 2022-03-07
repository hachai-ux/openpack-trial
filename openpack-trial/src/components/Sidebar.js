import { HomeIcon,OfficeBuildingIcon, ShoppingCartIcon, HandIcon, NewspaperIcon, CreditCardIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';


const Sidebar = (props) => {



    return (
        <nav className="h-screen fixed top-0 width-12 border-r-2 pr-20 pt-14 pl-10">
            <ul className="list-none">
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <HomeIcon className="h-5 w-5 text-gray-600" />
                        <span>Cockpit</span>
                        </a>
                </li>
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <OfficeBuildingIcon className="h-5 w-5 text-gray-600" />
                        <span>Digital Factory</span>
                        </a>
                </li>
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
                        <span>Market Place</span>
                        </a>
                </li>
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <HandIcon className="h-5 w-5 text-gray-600" />
                        <span>Service Store</span>
                        </a>
                </li>
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <NewspaperIcon className="h-5 w-5 text-gray-600" />
                        <span>News</span>
                        </a>
                </li>
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <CreditCardIcon className="h-5 w-5 text-gray-600" />
                        <span>Finance</span>
                        </a>
                </li>
                <hr />
                <li>
                    <a href='#' className="flex items-center px-2 py-2">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />
                        <span>Help</span>
                        </a>
                </li>
            
            </ul>
        </nav>
        
    );
};

export default Sidebar; 