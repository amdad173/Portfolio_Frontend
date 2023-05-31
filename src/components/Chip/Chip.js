import React from 'react'
import './Chip.scss'
const Chip = ({label}) => {
  return (
    <div>
      <p className="chip">{label}</p>;
    </div>
  )
}

export default Chip
