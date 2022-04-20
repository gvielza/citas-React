import React from 'react';
import { useState } from 'react';
function FormularioN() {
    const[nombre,setNombre]=useState('Hook');
    console.log('');
    return (
        <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y <span className='text-indigo-500 font font-bold'>Adminístralos</span></p>
      
            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="">
<div className='mb-5'>
<label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre de la Mascota</label>
<input  type="text" id='mascota'
placeholder='Nombre de la mascota'
 className='border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md'  />
</div>
<div className='mb-5'>
<label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del Propetiario</label>
<input  type="text" id='propietario'
placeholder='Nombre de propietario'
 className='border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md'  />
</div>
<div className='mb-5'>
<label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
<input  type="email" id='email'
placeholder='Email contacto propietario'
 className='border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md'  />
</div>
<div className='mb-5'>
<label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
<input  type="date" id='alta'
 className='border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md'  />
</div>
<div className='mb-5'>
<label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
<textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md' id='sintomas' 
placeholder='Describe los síntomas'/>
</div>
<input type="submit" value="Agregar Paciente" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700  cursor-pointer tracking-widest'/>

      </form>
      
      </div>
    );
}

export default FormularioN;