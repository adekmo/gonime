import { useState } from 'react'
import styles from './style'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Detail from './pages/Detail'

const App = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackGround = () => {
    const header = document.querySelector('#navv');
    const fix = header.offsetTop;

    if (window.pageYOffset > fix) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  }

  window.addEventListener('scroll',  changeBackGround);

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/* yg ditambah flexfix */}
        <div id="navv" className={`${styles.boxWidth} ${navbar ? 'nav-fix' : 'navv'}`}>
          <Navbar />
        </div>
      </div>

      

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App