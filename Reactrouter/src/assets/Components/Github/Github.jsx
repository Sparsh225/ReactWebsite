import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("https://api.github.com/users/Sparsh225")
       .then(reslove=>reslove.json())
       .then(data=>{
        console.log(data)
        setData(data)
       })
     },[])
  return (
    <div className='text-center m-4 text-white p-4 bg-gray-400 text-3xl'>
      Github followers :{ data.followers}
      <img width={300} src={data.avatar_url} alt="github_picture"  />
    </div>
  )
}

export default Github
