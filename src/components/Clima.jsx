import React from 'react';
import { Search, Wind, Droplets, CloudRain, Cloudy, Sun, CloudDrizzle, CloudLightning, CloudSun, CloudSunRain } from 'lucide-react';
import './css/style.css';


export const Clima = () => {
  
  return (
    <div className='cor2'>
      <main className="container">
        <section className="temperature-now">
          <div className="location">
            <strong id="loc-atual">Rio do Sul, SC</strong>
            <form id="my-form" className="search">
              <input
                type="text"
                name="localizacao"
                placeholder="Adicionar localização"
                className="search__input"
                id="loc"
              />
              <button type="button" className="search__button" id="btn-loc">
                <Search/>
                <i className="ri-search-2-line"></i>
              </button>
            </form>
          </div>
          <div className="temp">
            <div className="number">
              <span id="temp">18°</span>
              <div className="maxmin">
                <span id="max">12°</span>
                <span id="min">16°</span>
              </div>
            </div>
            <div className="celsius">°C</div>
          </div>
          <div className="statistics">
            <div className="stats">
              <Wind className="info"/>
              <div className="info">
                
                <p>Vento</p>
                <h5 id="wind">17 <span>km/h</span></h5>
              </div>
            </div>
            <div className="stats">
              <Droplets className="info"/>
              <div className="info">
                <p>Umidade</p>
                <h5 id="humidity">31 <span>%</span></h5>
              </div>
            </div>
            <div className="stats">
              <CloudRain className="info"/>
              <div className="info">
                <p>Chuva</p>
                <h5 id="rain">10 <span>%</span></h5>
              </div>
            </div>
          </div>
        </section>
        <section className="air-quality">
          <h2 className="title">
            Qualidade do ar
          </h2>

          <p className="good">Boa</p>
          <p className="number">21</p>

          <div className="info">
            <div className="number">
              <p>12.9</p>
              <small>PM2.5</small>
            </div>
            <div className="number">
              <p>12.9</p>
              <small>PM10</small>
            </div>
            <div className="number">
              <p>2.1</p>
              <small>SO₂</small>
            </div>
            <div className="number">
              <p>1.4</p>
              <small>NO₂</small>
            </div>
            <div className="number">
              <p>21.2</p>
              <small>O₃</small>
            </div>
            <div className="number">
              <p>0.7</p>
              <small>CO</small>
            </div>
          </div>
        </section>
        <section className="sun-time">
          <h2 className="title">
            Horário do
            sol
          </h2>
          <div className="sun-chart-wrapper">
            <div className="sun-chart">
              <div className="chart">
                
              </div>
              <time className="now">16:01</time>
            </div>
          </div>

          <div className="time">
            <time className="sunrise">06:00</time>
            <time className="sunset">18:52</time>
          </div>
        </section>
        <section className="week-weather">
          <div className="day">
            <h4 className="title">Amanhã</h4>
            <div className='stats'>
              <Cloudy color='white' size={35}/>
            </div>
            <p>21° <span>16°</span></p>
          </div>
          <div className="day">
            <h4 className="title">Sexta-Feira</h4>
            <div className='stats'>
              <Sun color='yellow' fill='yellow' size={35}/>
            </div>
            <p>28° <span>20°</span></p>
          </div>
          <div className="day">
            <h4 className="title">Sábado</h4>
            <div className='stats'>
              <CloudDrizzle color='white' size={35}/>
            </div>
            <p>25° <span>21°</span></p>
          </div>
          <div className="day">
            <h4 className="title">Domingo</h4>
            <div className='stats'>
              <CloudLightning color='white' size={35}/>
            </div>
            <p>20° <span>14°</span></p>
          </div>
          <div className="day">
            <h4 className="title">Segunda-Feira</h4>
            <div className='stats'>
              <CloudSun color='white' size={35}/>
            </div>
            <p>24° <span>18°</span></p>
          </div>
          <div id="day-mobile" className="day">
            <h4 className="title">Terça-Feira</h4>
            <div className='stats'>
              <CloudSunRain color='white' size={35}/>
            </div>
            <p>34° <span>27°</span></p>
          </div>
        </section>
      </main>
    </div>
  )
}
