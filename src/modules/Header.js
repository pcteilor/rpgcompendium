import { React, useState } from 'react'
import { Content, Row, Col } from '../modules/Grid'
import logo from '../img/logo.png'
import { Link, useHistory } from 'react-router-dom'



export default function Header(props){


    const [searchTerm, setSearchTerm] = useState('');
    let history = useHistory()
    
    const handleChange = (e) => setSearchTerm(e.target.value);

    const handleKeyPress = e => {
        if (e.key === 'Enter' && searchTerm !== ''){
            localStorage.setItem('busca', JSON.stringify(searchTerm))
            return (
                history.push({pathname:'/search'} )
            )
        } 
    } 

    
    return(
        <Content container='container-fluid bg-support'>
            <Content container='container'>
                <Row Row="justify-content-center">
                    <Col col='col-md-2 py-3 align-self-center text-center'>
                        <Link to='/'>
                            <img src={logo} alt='Monster Compendium' className='img-fluid px-3' />
                        </Link>
                    </Col>
                    <Col col='col-md-8 py-3 align-self-center'>
                        <div className='search-header py-3'>
                            <span className='px-4 float'><i className='fas fa-search'></i>
                            <input 
                            className='input-searchbar h-100 px-2' 
                            id='searchbar' 
                            type='text' 
                            placeholder='Pesquise aqui...' 
                            value={searchTerm}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange}
                            
                            
                            /></span>
                        </div>
                    </Col>
                    <Col col='col-md-2 py-3 align-self-center text-center'>
                        <Link to='/criar' className=''>
                            <button className='btn btn-support'>
                                
                                    <i className='fas fa-plus-circle'></i> Criar monstro

                            </button>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Content>
    )
}
