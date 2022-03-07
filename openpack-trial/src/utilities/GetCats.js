import { nanoid } from 'nanoid';
import { useQuery } from 'react-query';

const GetCats = (props) => {

    //2 minutes in milliseconds
    const updateTime = 120000;

    const formatDate = (dateData) => {
        //format dates without leading zeroes yet
        const date = new Date(dateData);
        const [day, month, year, hour, minute] = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        //const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const newDateString = day + '.' + month + '.' + year + ' - ' + hour + ':' + minute;
        return newDateString;
    };

    const getFacts = () => {
        console.log('fetch cat data');
        //change login to production link later
        return fetch('https://cat-fact.herokuapp.com/facts', {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    
    const { isLoading, isError, data, error } = useQuery('catfacts', getFacts, {refetchInterval: updateTime, refetchIntervalInBackground: true});

    if (isLoading) {
        return <span>Loading...</span>
    }
 
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    
    if (error) return 'An error has occurred: ' + error.message

  
       
        const catFactsList = data.map((fact) => {
            return <li key={nanoid()} className="bg-white w-80 rounded-md my-5 mx-5 py-5 px-5">
                <p>{fact.text}</p>
                <p className="text-sm text-slate-400 pt-1">{formatDate(fact.createdAt)}</p></li>
        
     
        });
    
    


        return (
            <div className="get-cat">
                <ul>
                    {catFactsList}
                </ul>
            </div>
        
        );
    };


export default GetCats; 