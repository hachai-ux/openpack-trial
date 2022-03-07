import { useEffect } from 'react';

const GetCats = (props) => {

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
                
                    console.log('Success:', result);

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        getFacts();
        
    }, []);

  



    return (
        <div className="get-cats">
        
        </div>
        
    );
};

export default GetCats; 