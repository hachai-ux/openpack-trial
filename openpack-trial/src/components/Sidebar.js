import { HomeIcon,OfficeBuildingIcon, ShoppingCartIcon, HandIcon, NewspaperIcon, CreditCardIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';


const Sidebar = (props) => {



    return (
        <nav className="h-screen fixed top-0 width-12">
            <ul className="list-none">
                <li>
                    <a href='#'></a>
                    <HomeIcon className="h-5 w-5 text-blue-500" />
                    <span>Cockpit</span>
                </li>
                <li>
                    <a href='#'></a>
                    <OfficeBuildingIcon className="h-5 w-5 text-blue-500" />
                    <span>Digital Factory</span>
                </li>
                <li>
                    <a href='#'></a>
                    <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
                    <span>Market Place</span>
                </li>
                <li>
                    <a href='#'></a>
                    <HandIcon className="h-5 w-5 text-blue-500" />
                    <span>Service Store</span>
                </li>
                <li>
                    <a href='#'></a>
                    <NewspaperIcon className="h-5 w-5 text-blue-500" />
                    <span>News</span>
                </li>
                <li>
                    <a href='#'></a>
                    <CreditCardIcon className="h-5 w-5 text-blue-500" />
                    <span>Finance</span>
                </li>
                <hr />
                <li>
                    <a href='#'></a>
                    <QuestionMarkCircleIcon className="h-5 w-5 text-blue-500" />
                    <span>Help</span>
                </li>
            
            </ul>
        </nav>
        
    );
};

export default Sidebar; 