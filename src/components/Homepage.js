import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'



const Homepage = (props) => {

const navigate = useNavigate();

    return (
        <>
            <div className='pizzaHome'>
                <h2 style={{display: 'flex', justifyContent: 'center', alignContent: 'center', paddingTop: 200,}}>
                    Your favorite food while coding!<br />
                </h2>
                <div>
                    
                </div>
                <div className='orderbuttons' style={{paddingTop: 10}}>
                    <button className='mainbutton' onClick={() => navigate('./Form')} >Build Your Pizza Here!</button>
                </div>
                
            </div>



            <div className='placesToEat'>
                <h3>Food Delivery in Pet Place</h3>
            </div>


            <section className='foodchoices'>
                <div>
                    <img className='DDB' />
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>Doggie Dave's Burgers</h4>
                    <div className='orderbuttons'>
                        <button style={{backgroundColor: 'lightblue'}} >Order Here!</button>&nbsp;
                        <button style={{backgroundColor: 'lightblue'}}>About Doggie Dave's</button>
                    </div>
                </div>

                
                <div >
                    <img className='DC' />
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>Dunkin Cat</h4>
                
                <div className='orderbuttons'>
                        <button style={{backgroundColor: 'lightblue'}} >Order Here!</button>&nbsp;
                        <button style={{backgroundColor: 'lightblue'}}>About Dunkin Cat's</button>
                    </div>
                </div>


                <div >
                    <img className='CW' />
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>Coco's Whippy</h4>
               
                <div className='orderbuttons'>
                        <button style={{backgroundColor: 'lightblue'}} >Order Here!</button>&nbsp;
                        <button style={{backgroundColor: 'lightblue'}}>About CoCo's Whip</button>
                    </div>
                 </div>


                <div >
                    <img className='MDD' />
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>McDoggin's Days</h4>

                    <div className='orderbuttons'>
                        <button style={{backgroundColor: 'lightblue'}} >Order Here!</button>&nbsp;
                        <button style={{backgroundColor: 'lightblue'}}>About McDoggin's</button>
                    </div>    
                </div>
            </section>


        </>
    )
}

export default Homepage;