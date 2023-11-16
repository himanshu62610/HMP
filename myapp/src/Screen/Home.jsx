import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import Options2 from '../components/Options2'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id='home'>
        <div>
            <Navbar></Navbar>
            <div className='container' id='options'>
                <Link to='/complain' id='line'>
                <div id='opt1'>
                    <Options title='Complain Box' url='https://t4.ftcdn.net/jpg/02/44/15/55/360_F_244155511_Gm1uueNiudbsoamWM6tJXPjsrhuEYf8e.jpg' discription='Here you can add up your Complain reagarding anything releated to mess ,mess members ,workers ,hostel commitee, and food quality'></Options>
                </div>
                </Link>
                <Link to='/response' id='line'>
                <div id='opt2'>
                    <Options2 title='Responses Section' url='data:image/jpeg;base64,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' discription='The responsese of your complains are here verified and checked by mess commitee , hostel commitee , caretaker and chief warden'></Options2>
                </div>
                </Link>
                <Link to='/mess' id='line'>
                <div id='opt1'>
                    <Options title='Mess' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAq5xCgP61nIKVDVLuezqk7_wBrpQPZ7Ibw&usqp=CAU' discription='Here you can find all of the information regarding mess , mess menu ,timing , per day pricing , extra charges for outsider aand etc.'></Options>
                </div>
                </Link>
                <Link to='/hostel' id='line'>
                <div id='opt2'>
                    <Options2 title='Hostel Details' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r-yK87WbecShw6_zBHvA4yTU5Ilny8sV2g&usqp=CAU' discription='Here you can find your hostel discription and different info and contact details of all authority of respective hostel'></Options2>
                </div>
                </Link>

            </div>
        </div>
      
    </div>
  )
}
