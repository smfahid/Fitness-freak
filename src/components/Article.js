import React from 'react';

const Article = () => {
    return (
        <div>
            <div className='my-3'>
                <h1 className='text-xl font-bold'>How does React Work?</h1>
                <p className='text-sm'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='my-3'>
                <h1 className='text-xl font-bold'>Difference Between Props and State</h1>
                <p className='text-sm'>While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Uses of useEffect</h1>
                <ul className='list-decimal mx-4'>
                    <li >validating input field</li>
                    <li >live filtering</li>
                    <li >trigger animation on new array value</li>
                    <li >update paragraph list on fetched API data update</li>
                </ul>
            </div>            
        </div>
    );
};

export default Article;