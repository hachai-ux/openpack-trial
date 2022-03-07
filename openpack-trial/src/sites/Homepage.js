import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from '../components/Main';

const Homepage = (props) => {



    return (
        <div className="Homepage">
            <Header/>
            <Main />
            <Sidebar />
        </div>
        
    );
};

export default Homepage; 