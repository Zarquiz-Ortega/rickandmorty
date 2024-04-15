import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import CardLocation from './components/CardLocation'
import LocationData from './components/LocationData'
import './App.css'


function App() {

  const [locations, getLocation, hasError, isLoading] = useFetch()

  const [inputValue, setInputValue] = useState(Math.floor(Math.random() * 126) + 1)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`
    getLocation(url)
  }, [inputValue])

  const textInput = useRef()

  const handelSunmit = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.toLowerCase().trim())
    textInput.current.value = ''
  }


  return (
    <>
      {
        isLoading ?
          <h2>Loading...</h2>
          :
          <div>
            <section>
              <div className="hero" style={{ backgroundImage: 'url(../public/img/fonfo.png)' }}>
                <div className="hero__content">
                  <img className="hero__title" src="../public/img/textpng.png" alt="" />
                </div>
              </div>
            </section>
            <div className='app'>
              
              <form className='app__from' >
                <input className='app__input' type="text" ref={textInput} />
                <button className='app__btn' onClick={handelSunmit} >Search</button>
              </form>
              {
                hasError || inputValue === '0' ?
                  <h2>❌ Hey you must an id from 1 to 126 ❌</h2>
                  :
                  <>
                    <LocationData
                      location={locations}
                    />
                    <div className='app__container'>
                      {
                        locations?.residents.map(resident => (
                          <CardLocation
                            key={resident}
                            url={resident}
                          />
                        ))
                      }
                    </div>
                  </>
              }
            </div>
          </div>
      }
    </>
  )
}

export default App
