import React from 'react'
import './style.css'

const Main: React.FunctionComponent = () => {
    return (
        <div className='pagina'>
            <div className='blocoPagina'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Picture1.png'} alt="Walmir Fernandes" className="fotoPerfil" />
                </div>
                <div>
                    <h1>Walmir da Silva Fernandes</h1>
                    <p>Arquiteto de Soluções | .NET | SQL | Azure | AWS</p>
                </div>
            </div>
        </div>
    )
}

export default Main