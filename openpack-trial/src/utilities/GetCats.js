import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

const GetCats = (props) => {


    const [catFacts, setCatFacts] = useState([]);

    const formatDate = (dateData) => {
        //format dates without leading zeroes yet
        const date = new Date(dateData);
        const [day, month, year, hour, minute] = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        //const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const newDateString = day + '.' + month + '.' + year + ' - ' + hour + ':' + minute;
        return newDateString;
    };

    useEffect(() => {

        console.log('foo');

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
                
                    setCatFacts(result);
                    console.log('Success:', result);

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        getFacts();
        
    }, []);

  
    const catFactsList = catFacts.map((fact) => {
        return <li key={nanoid()}>
            <p>{fact.text}</p>
            <p>{formatDate(fact.createdAt)}</p></li>
})


    return (
        <div className="get-cats">
            <ul>
                {catFactsList}
            </ul>
        </div>
        
    );
};

export default GetCats; 