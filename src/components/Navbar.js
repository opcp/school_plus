import React, { useState } from 'react'
import logo from '../image/logo.svg'
import arrow_d from '../image/icon-arrow-d.svg'
import login from '../image/icon-login.svg'

const Navbar = () => {
  const [Nav, blockNav] = useState({
    more: false,
    info: false,
  })

  const more_handler = () => {
    blockNav({ more: true })
  }
  const more_handler2 = () => {
    blockNav({ more: false })
  }

  const info_handler = () => {
    blockNav({ info: true })
  }
  const info_handler2 = () => {
    blockNav({ info: false })
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="School A+" />
            </a>
          </div>

          <ul className="nav">
            <li>
              <a href="#"> {`國家搜尋`}</a>
              <img src={arrow_d} />
            </li>
            <li>
              <a href="#"> {'語言搜尋'}</a>
              <img src={arrow_d} />
            </li>
            <li>
              <a href="#"> {'條件式搜尋'}</a>
              <img src={arrow_d} />
            </li>
            <li>
              <a href="#"> {'報名流程'}</a>
              <img src={arrow_d} />
            </li>
            <li onMouseEnter={info_handler} onMouseLeave={info_handler2}>
              <a href="#"> {'遊學資訊'}</a>
              <img src={arrow_d} />
              {Nav.info ? (
                <ul className="school_info">
                  <li>
                    <span>最新文章</span>
                  </li>
                  <li>
                    <span>菲律賓遊學</span>
                  </li>
                  <li>
                    <span>學生心得</span>
                  </li>
                </ul>
              ) : (
                ''
              )}
            </li>
            <li onMouseEnter={more_handler} onMouseLeave={more_handler2}>
              <a href="#">{'更多'}</a>
              <img src={arrow_d} />
              {Nav.more ? (
                <ul className="more_info">
                  <li>
                    <span>學校比較</span>
                  </li>
                  <li>
                    <span>聯絡我們</span>
                  </li>
                </ul>
              ) : (
                ''
              )}
            </li>
          </ul>
          <ul className="header-member">
            <li>
              <img src={login} />
              {'會員中心'}
            </li>
            <li>{'我的學校清單'}</li>
          </ul>
        </div>
      </header>
      <nav>
        <ul>
          <li className="fb_icon">
            <img className="fb" src={require('../image/icon-circle-fb.svg')} />
          </li>
          <li>
            <img
              className="line"
              src={require('../image/icon-circle-line.svg')}
            />
          </li>
          <li>
            <img
              className="ig"
              src={require('../image/icon-circle-instagram.svg')}
            />
          </li>
          <li>
            <img
              className="wechat"
              src={require('../image/icon-circle-wechat.svg')}
            />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
