import React from 'react';

function Error({mensaje}) {
    return (
        <div className='bg-red-500 text-white text-center font-bold uppercase mm-3 p-3 rounded-md'>
    <p>{mensaje}</p>
</div>
    );
}

export default Error;