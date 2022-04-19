import React, { Component } from 'react';

class Paciente extends Component {
    render() {
        return (
            <div>
               <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
<p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
  <span className='font-normal normal-case'>Hook</span>
</p>


<p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
  <span className='font-normal normal-case'>Pepito</span>
</p>


<p className='font-bold mb-3 text-gray-700 uppercase'>email: {""}
  <span className='font-normal normal-case'>pal@akka.do</span>
</p>


<p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {""}
  <span className='font-normal normal-case'>10 de diciembre de2020</span>
</p>


<p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {""}
  <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
  Ullam ratione libero sed voluptatibus ab nisi quas sapiente. Consequuntur officiis quos neque fugit animi. 
    Non saepe mollitia sequi officia sed harum.</span>
</p>
</div> 
            </div>
        );
    }
}

export default Paciente;