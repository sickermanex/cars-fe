import Vehicle from '@/app/components/Vehicle';
import React from 'react'
import VehicleType from '@/public/types/vehicles'; 


const VehiclesTablePage = async () => {
  const res = await fetch('http://localhost:8080/vehicles', { cache: 'no-store' });
  const vehicles: VehicleType[] = await res.json();

  return (
    <>
      <h1>Vehicles Table Page</h1>
      {vehicles.length > 0 ? 
        <table>
        <thead>
          <th>Image</th>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </thead>
        <tbody>
          {vehicles.map((vehicle, id) => <Vehicle key={vehicle.id} data={vehicle} number={id} />)}
        </tbody>
      </table>
      : 'There are no vehicles'}
    </>
  )
}

export default VehiclesTablePage