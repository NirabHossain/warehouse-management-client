import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <h3>JS vs Node.js</h3>
            <p>
                Javascript (JS) is an object-oriented scripting language allowing making changes to a HTML website to make it dynamic. On the other hand, NodeJS  represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter. JS is a browser's language which can only be valid in the browser's front-end. Nodejs is also a browser's language which can access both the <strong>Client Side</strong> and the <strong>Server Side</strong>. Both are needed to develop a website properly.
            </p>
            <h3>When to use Nodejs and MongoDB?</h3>
            <p>
                Node.js is needed to connect the <strong>client-side</strong> with the <strong>server-side</strong>. But <strong>MongoDB</strong> is the database server where we can store a data and can call the data from the local browser using <strong>Node.js</strong>. So the combination of these two tools are hugely needed to make a dynamic website user friendly.
            </p>
            <h3>SQL vs NOSQL Databases</h3>
            <p>
                There are five basic practical differences between SQL and NoSQL:
                <ul>
                    <li>Language: SQL is very old allowing highly suited recognized database with complex queries. Nosql is just flexible but it lacks standard interface.</li>
                    <li>Scalability: SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</li>
                    <li>Structure: Their structures are different. Nosql uses key value pair while SQL using columns</li>
                    <li>Properties: There are difference of many basice properties like <strong>durability, consistency etc</strong></li>
                    <li>There is a whole different bunch of Supports and communities</li>
                </ul>
                
            </p>
        </div >
    );
};

export default Blogs;