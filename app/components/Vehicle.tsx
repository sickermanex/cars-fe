import React from 'react'
import Vehicle from '@/public/types/vehicles'

interface VehicleProps {
  data: Vehicle;
  number: number
}

const Vehicle = (props: VehicleProps) => {
  return (
    <>
      <tr>
        <td><img src={`https://loremflickr.com/50/50/car,${props.data.make},${props.data.year}/all`}/></td>
        <td>{props.number + 1}</td>
        <td>{props.data.make}</td>
        <td>{props.data.model}</td>
        <td>{props.data.year}</td>
      </tr>
    </>
  )
}

export default Vehicle