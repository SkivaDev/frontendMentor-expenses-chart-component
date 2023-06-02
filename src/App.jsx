import Chart from './components/chart/Chart'
import Header from './components/header/Header'
import './App.scss'

function App() {

  return (
    <>
      <main className='expenses-chart'>
        <div className="expenses-chart__container">
          <Header />
          <Chart />
        </div>
      </main>
    </>
  )
}

export default App
