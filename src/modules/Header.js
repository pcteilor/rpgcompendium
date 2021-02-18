import { React, useState, useEffect } from 'react';
import { Content, Row, Col } from '../modules/Grid';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import monsters from '../monstersdata.json';



export default function Header(props){

    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    // const handleChange = e => {
    //   setSearchTerm(e.target.value);
    // };

    // monsters.filter((val) => {
    //     if (searchTerm === '') {
    //         return val
    //     } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    //         return val
    //     }
    // })
    // // useEffect(() => {
    // //   const results = monsters.filter(monster =>
    // //     monster.name.toLowerCase().includes(searchTerm)
    // //   );
    // //   setSearchResults(results);
    // // }, [searchTerm]);
    
    // console.log('searchTerm');
    // console.log(searchTerm);
    // console.log('setSearchResults');
    // console.log(setSearchResults);
    // console.log('searchResults');
    // console.log(searchResults);
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = e => {
        if (e.key === 'Enter' && e !== ''){
            setSearchTerm(e.target.value);
            console.log('Deu certo')
        } else {
            console.log('Erro');
        }  
    } 

    
    return(
        <Content container='container-fluid bg-support'>
            <Content container='container'>
                <Row>
                    <Col col='col-2 py-3 align-self-center'>
                        <Link to='/'>
                            <img src={logo} alt="Monster Compendium" className='img-fluid px-3' />
                        </Link>
                    </Col>
                    <Col col='col-8 py-3 align-self-center'>
                        <div className='search-header py-3'>
                            <span className='px-4'><i className="fas fa-search"></i></span>
                            <input 
                            className='input-searchbar h-100' 
                            id='searchbar' 
                            type='text' 
                            placeholder='Pesquise aqui...' 
                            value={searchTerm}
                            onKeyPress={handleChange}
                            
                            
                            />
                        </div>
                    </Col>
                    <Col col='col-2 py-3 align-self-center'>
                        <Link to='/monster'>
                            <span className='align-middle py-5'>
                                <i className="far fa-user-circle"></i> Paulo Teilor
                            </span>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Content>
    )
}
