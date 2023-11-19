import React, { useState } from 'react'

const Calculator = () => {
    const[value,setvalue]=useState('')
  return (
    <div className='body'>
        <div className='calculator'>
            <form>
                <div className='display'>
                    <input className='text' type='text' value={value}/>
                </div>
            <div className='btns'>
            <input type="button" className='btn btn-primary' value="AC" onClick={e=>setvalue(" ")}/>
            <input type="button" className='btn btn-primary' value="(" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value=")" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="%" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="/" onClick={e=>setvalue(value+e.target.value)}/>
          </div>

          <div className='btns'>
            
            <input type="button" className='btn btn-primary' value="7" onClick={e=>setvalue(value+e.target.value)} />
            <input type="button" className='btn btn-primary' value="8" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="9" onClick={e=>setvalue(value+e.target.value)} />
            <input type="button" className='btn btn-primary' value="0" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="*" onClick={e=>setvalue(value+e.target.value)} />

          </div>

          <div className='btns'>
            
            <input type="button" className='btn btn-primary' value="4" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="5" onClick={e=>setvalue(value+e.target.value)} />
            <input type="button" className='btn btn-primary' value="6" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="00" onClick={e=>setvalue(value+e.target.value)}/>

            <input type="button" className='btn btn-primary' value="-" onClick={e=>setvalue(value+e.target.value)} />

          </div>

         

          <div className='btns'>
            <input type="button" className='btn btn-primary' value="1" onClick={e=>setvalue(value+e.target.value)} />
            <input type="button" className='btn btn-primary' value="2" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="3" onClick={e=>setvalue(value+e.target.value)} />
            <input type="button" className='btn btn-primary' value="+" onClick={e=>setvalue(value+e.target.value)}/>
            <input type="button" className='btn btn-primary' value="."  onClick={e=>setvalue(value+e.target.value)}/>


          </div>
          <div className='btns'>
            <input type="button" className='btn btn-primary'  id='equal' value="DE" onClick={e=>setvalue(value.slice(0,-1))}/>
            <input type="button" className='btn btn-primary' id='equal' value="="  onClick={e => setvalue(eval(value))}/>

          </div>
            </form>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Calculator