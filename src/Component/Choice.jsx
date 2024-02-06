import React from 'react'

function Choice() {
  return (
    <div className='w-full px-20 py-2'>
    <div className='w-full h-full' >
        <h1 className='text-lg font-bold'>Top categories</h1>
      <ul className='flex justify-center flex-wrap gap-6 py-4'>
        <li >
            <img src="/Categorie Img/img1.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Design</p>
        </li>
        <li >
            <img src="/Categorie Img/img2.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Development</p>
        </li>
        <li >
            <img src="/Categorie Img/img3.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Marketing</p>
        </li>
        <li >
            <img src="/Categorie Img/img4.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>IT and Software</p>
        </li>
        <li >
            <img src="/Categorie Img/img5.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Personal Development</p>
        </li>
        <li >
            <img src="/Categorie Img/img6.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Business</p>
        </li>
        <li >
            <img src="/Categorie Img/img7.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Photography</p>
        </li>
       
        <li >
            <img src="/Categorie Img/img8.jpg" width={300} height={300} alt="" />
            <p className='font-bold'>Music</p>
        </li>
       
      </ul>
    </div>
    </div>
  )
}

export default Choice
