import './App.css'
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'
import logo from './images/logo.svg'

function App() {
  return (

    <div>

      <img src={logo} alt='logo' className='Logo' />

      <div className='Calculadora'>

        <div className='Pay'>
          <label for='Bill' className='LabelBill'>Bill</label>
          <main className='BillAmount'>
            <img src={iconDollar} alt='usd-icon' className='UsdIcon' />
            <input type='number' className='Bill' name='Bill' />
          </main>

          <label className='LabelTips'>Select Tip %</label>
          <main className='Tips'>
            <button className='BotonTip'>5%</button>
            <button className='BotonTip'>10%</button>
            <button className='BotonTip'>15%</button>
            <button className='BotonTip'>25%</button>
            <button className='BotonTip'>50%</button>
            <button className='BotonTip'>Custom</button>
          </main>

          <label for='NumberPeople' className='LabelPeople'>Number of People</label>
          <main className='NumberPeople'>
            <img src={iconPerson} alt='people-icon' className='PeopleIcon' />
            <input type='number' className='People' name='People' />
          </main>
        </div>

        <div className='TipBill'>

          <main className='TipAmount'>
            <div className='TextTip'>
            <label>Tip Amount</label>
            <h6 className='personTip'>  /person </h6>
            </div>
            <span>TIP AMOUNT</span>
          </main>

          <main className='Total'>
            <div className='TextTotal'>
            <label>Total</label>
            <h6> /person </h6>
            </div>
            <span>TOTAL</span>
          </main>
          
          <button className='BotonReset'>Reset</button>

        </div>

      </div>


      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Gabriel</a>.
      </footer>
    </div>
  );
}

export default App;
