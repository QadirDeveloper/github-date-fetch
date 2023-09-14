import React from 'react'
import Image from 'next/image'
export default function page() {



   
 

  return (
    <div>
      <link rel='stylesheet' href='	https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <Image src="/img/header.jpeg" width={1350} height={70} alt='not found' />
            <h1>skd</h1>
            <h1>skd</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h5>Ara profile</h5>
            <p>prfile sheet 0.40 mm to1.00 mm 28 group up to 20gauge and worth 100mm and send where you
              want. Gi Sheet and RollCoated Sheet and Roll,M/S Sheet and Roll, H.R.C Seet and Roll,Galvanize Sheet and Roll and Stain-less steel
              also can profile by us</p>
          </div>
          <div className='col'>
            <Image src="/img/facebook.jpeg" width={30} height={30} alt='not found' />
            <a href="https://www.facebook.com/">facebook</a><br/>
            <Image src="/img/instagram.jpeg" width={30} height={30} alt='not found' />
          
            <a href='https://www.instagram.com/'>Instagram</a>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <Image src="/img/rool.jpeg" width={400} height={180} alt='not found' />
          </div>
          <div className='col-4'>
            <h5>Cable Tray</h5>
          
          <p>We have so many different kind and size of Cable Tray in M/S. Galvanize and coated sheet. You can purchase S.S Cable Tray from us too. Cable Tray of any industries you can buy from us.
            We have so many different kind and size of Cable Tray in M/S. Galvanize and coated sheet. You can purchase S.S Cable Tray from us too. Cable Tray of any industries you can buy from us.
            We have so many different kind and size of Cable Tray in M/S. Galvanize and coated sheet. You can purchase S.S Cable Tray from us too. Cable Tray of any industries you can buy from us.</p>
        </div>
        <div className='col-4'>
          <Image src="/img/rollers.jpeg" width={420} height={200} alt='not found' />
          <p>C-Channels made by us in every gauges
. 3.00, 2.50, 2.00, 1.80, 1.60 length 10 feet.
We can make C-Channel in different sizes
in shape and we can also make C-Channel
for petrol pumps. CNG Stations and toll plazas</p>
        </div>
      </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul>
              <li>Ara</li>
              <li> profile</li>
              <li>List</li>
              <li>170*</li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>Ara</li>
              <li>profile</li>
              <li>list</li>
              <li>170*</li>

            </ul>
          </div>
          <div className='col'>
            <ol>
            <li>Ara</li>
              <li>profile</li>
              <li>list</li>
              <li>170*</li>
            </ol>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <h2 className='form'>Join us</h2>
            <form className='form'>

              <input type='text' placeholder='Name'></input><br/>
              <input type='text' placeholder='Adress'></input><br/>
              <input type='text' placeholder='City'></input><br/>
              <input type='text' placeholder='State'></input><br/>
              <input type='text' placeholder='Zip'></input><br/>
              <input type='radio'></input>
              
              
              <button>Newsweek</button><br/>
              <textarea type="comment" rows={5} cols={20}>Comment</textarea>
            </form>
            
           
          </div>
          
        </div>
      </div>

    </div>
  )
}



