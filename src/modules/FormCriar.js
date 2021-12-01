import React, { useState } from 'react'


export default function FormCriar(){


    const [ data, setData ] = useState({
        'name':'',
        'type':'',
        'size': '',
        'cr': '',
        'alignment': '',
        'imgSrc': '',
        'desc': '',
        'D20': {
            'abilities': {
              'STR': '',
              'DEX': '',
              'CON': '',
              'INT': '',
              'WIS': '',
              'CHA': ''
            },
           'actions': {
              'normalActions': [
                 {
                    'actionId': '',
                    'actionName': '',
                    'actionDesc': ''
                 }
              ],
              'legendaryActions': [
                 {
                    'legActionId': '',
                    'legActionName': '',
                    'legActionDesc': ''
                 }
              ]
           },
           'languages': [],
           'skills': {
              'Iniciativa': '',
              'Escalar': ''
           },
           'monsterLevel': '',
           'senses': '',
           'armorClass': '',
           'hp': '',
           'mp': '',
           'speed': '',
           'xp': ''
        }

    })

    const handleChange = (e) => {
        const value = e.target.value
        setData({ ...data, [e.target.name]: value })
        console.log(data)
    }

    const handleChangeD20Abilities = (e) => {
        const value = e.target.value
        const D20Abilities = data.D20.abilities
        setData({ ...data, D20: { abilities: { ...D20Abilities, [e.target.name]: value } } })
        console.log(data)
    }

    const handleChangeD20Actions = (e) => {
        const value = e.target.value
        const D20Actions = data.D20.actions
        setData({ ...data, D20: { normalActions: { ...D20Actions, [e.target.name]: value } } })
        console.log(data)
    }
    

    return (
        <div className='form-group'>

            <form>
                <div className='p-3'>

                    <h2 className='detail-titles'>Dados Básicos</h2>
                    <div>
                        <label className='text-label py-3'>Nome</label>
                        <input className='form-control input-base' name='name' value={data.name} onChange={handleChange} type='text' placeholder='Insira o nome aqui...' />
                    </div>
                    <div>
                        <label className='text-label py-3'>Descrição</label>
                        <div>
                            <textarea className='form-control input-base' name='desc' value={data.desc} onChange={handleChange} placeholder='Insira a descrição...' rows='3'></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <label className='text-label py-3'>Link da Imagem</label>
                        <input className='form-control input-base' name='imgSrc' value={data.imgSrc} onChange={handleChange} type='text' placeholder='Insira o link da imagem http://...' />
                    </div>

                    <h2 className='detail-titles pt-3'>Atributos</h2>
                    <div className='d-flex flex-row flex-wrap'>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>FOR</label>
                            <input className='form-control input-base' name='STR' value={data.STR} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>DES</label>
                            <input className='form-control input-base' name='DEX' value={data.DEX} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>CON</label>
                            <input className='form-control input-base' name='CON' value={data.CON} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>INT</label>
                            <input className='form-control input-base' name='INT' value={data.INT} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>SAB</label>
                            <input className='form-control input-base' name='WIS' value={data.WIS} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                        <div className='d-flex flex-column justify-content-center p-2'>
                            <label className='text-label py-3 text-center'>CAR</label>
                            <input className='form-control input-base' name='CHA' value={data.CHA} onChange={handleChangeD20Abilities} type='number' placeholder='0' min='1' />
                        </div>
                    </div>

                    <h2 className='detail-titles pt-3'>Ação</h2>
                    <div>
                        <label className='text-label py-3'>Nome da ação</label>
                        <input className='form-control input-base' name='actionName' value={data.actionName} onChange={handleChangeD20Actions} type='text' placeholder='Insira o nome da ação' />
                    </div>
                    <div>
                        <label className='text-label py-3'>Descrição</label>
                        <div>
                            <textarea className='form-control input-base' name='actionDesc' value={data.actionDesc} onChange={handleChangeD20Actions} placeholder='Insira a descrição...' rows='3'></textarea>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}