import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

const GetCats = (props) => {


    const [catFacts, setCatFacts] = useState([]);

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
            <p>{fact.createdAt}</p></li>
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