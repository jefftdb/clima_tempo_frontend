import React, { useState } from 'react'

export const Tempo = ({add}) => {
    
  return (
    <div>
        {add.cidade}
        {add.temperatura_min}
        {add.temperatura_max}
        {add.clima} 
        {add.descricao_temp}
    </div>
  )
}
