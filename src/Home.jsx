import { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import './App.scss';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{

    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [data])

  return (
    <>
      <section>
       <div className="container">
       <div className='top'>
          <div>
          <div>
            <h1>Discover Our Exclusive Menu</h1>
          </div>
          <div>
          <CiSearch className='icon' /><input type="text" /> <Link to={'/add'}><button>ADD</button></Link>
          </div>
          </div>
        </div>
        <div className='bottom'> {
          data.map(item=>{
            return(
              
             <div className='opsi'>
                <div className='imgDiv'>
                  <img src="https://th.bing.com/th/id/R.ecb19158cb4992eaea4452d25085ac87?rik=6vJ%2bxdd8oQqZsA&pid=ImgRaw&r=0" alt="" />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.info}</p>
                </div>
                <div className='price'>${item.price}</div>
            </div>
            )
          })
        }

        </div>
       </div>

      </section>

    </>
  )
}

export default Home