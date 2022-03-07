import { nanoid } from 'nanoid';
import { useQuery } from 'react-query';

const GetCats = (props) => {


    const formatDate = (dateData) => {
        //format dates without leading zeroes yet
        const date = new Date(dateData);
        const [day, month, year, hour, minute] = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        //const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const newDateString = day + '.' + month + '.' + year + ' - ' + hour + ':' + minute;
        return newDateString;
    };

    const getFacts = () => {
        //change login to production link later
        fetch('https://cat-fact.herokuapp.com/facts', {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => {
                return response.json();
            })
            .then(result => {
                
               
                console.log('Success:', result);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    
    const { isLoading, isError, data, error } = useQuery('catfacts', getFacts);

    if (isLoading) {
        return <span>Loading...</span>
    }
 
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    

    let catFactsList;
    if (data) {
        console.log(data);
        catFactsList = data.map((fact) => {
            return <li key={nanoid()} className="bg-white w-80 rounded-md my-5 mx-5 py-5 px-5">
                <p>{fact.text}</p>
                <p className="text-sm text-slate-400 pt-1">{formatDate(fact.createdAt)}</p></li>
        
     
        });
    
    }


        return (
            <div className="get-cat">
                <ul>
                    {catFactsList}
                </ul>
            </div>
        
        );
    };


export default GetCats; 