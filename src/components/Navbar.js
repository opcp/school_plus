import React, { useState } from 'react'
import logo from '../image/logo.svg'
import arrow_d from '../image/icon-arrow-d.svg'
import login from '../image/icon-login.svg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [Nav, blockNav] = useState({
    country: false,
    more: false,
    info: false,
    mobile_menu: false,
  })
  const country_handler = () => {
    blockNav({ country: true })
  }
  const country_handler2 = () => {
    blockNav({ country: false })
  }

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
  const mobile_menu_open2 = () => {
    blockNav({ mobile_menu: true }) 
  }
  const mobile_menu_close2 = () => {
    blockNav({ mobile_menu: false })
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
            <li onMouseEnter={country_handler} onMouseLeave={country_handler2}>
              <a className="navTitle" href="#">
                {' '}
                {`國家搜尋`}
              </a>
              <img src={arrow_d} />
              {Nav.country ? (
                <div className="search_country">
                  <ul>
                    <li>
                      <div className="flag">
                        <img src={require('../image/logo/00.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'菲律賓'}</a>
                        <span>PHILIPPINE</span>
                      </div>
                    </li>
                    <li>
                      <div className="flag">
                        <img
                          src={require('../image/logo/888197_flag_512x512.png')}
                        />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'澳洲'}</a>
                        <span>AUSTRALIA</span>
                      </div>
                    </li>
                    <li>
                      <div className="flag">
                        <img src={require('../image/logo/japan_flag2.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'日本'}</a>
                        <span>JAPAN</span>
                      </div>
                    </li>
                    <li>
                      <div className="flag">
                        <img src={require('../image/logo/Korea_flag2.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'韓國'}</a>
                        <span>KOREA</span>
                      </div>
                    </li>
                    <li>
                      <div className="flag">
                        <img src={require('../image/logo/ireland.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'愛爾蘭'}</a>
                        <span>IRELAND</span>
                      </div>
                    </li>
                    <li>
                      <div className="flag">
                        <img src={require('../image/logo/canada_flag.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'加拿大'}</a>
                        <span>CANADA</span>
                      </div>
                    </li>
                    <li className="malta">
                      <div className="flag">
                        <img src={require('../image/logo/Malta_flag.png')} />
                      </div>
                      <div className="flagtext">
                        <a href="#">{'馬爾他'}</a>
                        <span>MALTA</span>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </li>
            <li>
              <a className="navTitle" href="#">
                {' '}
                {'語言搜尋'}
              </a>
              <img src={arrow_d} />
            </li>
            <li>
              <a className="navTitle" href="#">
                {' '}
                {'條件式搜尋'}
              </a>
              <img src={arrow_d} />
            </li>
            <li>
              <a className="navTitle" href="#">
                {' '}
                {'報名流程'}
              </a>
              <img src={arrow_d} />
            </li>
            <li onMouseEnter={info_handler} onMouseLeave={info_handler2}>
              <a className="navTitle" href="#">
                {' '}
                {'遊學資訊'}
              </a>
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
              <a className="navTitle" href="#">
                {'更多'}
              </a>
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
          <ul className="header_member">
            <li>
              <img src={login} />
              {'會員中心'}
            </li>
            <li>{'我的學校清單'}</li>
          </ul>

          <div className="line_top">
            <img src={require('../image/icon-line-top.svg')} />
          </div>
          <div className="school_top">
            <img src={require('../image/icon-compare.svg')} />
          </div>
          <div className="num_top">
            <span>0</span>
          </div>
          <div className="mobile_menu" onClick={mobile_menu_open2}>
            <span className="mobile_line"></span>
          </div>
        </div>
        {Nav.mobile_menu ? (
          <div className="mobile_menu_open">
            <ul className="mobile_menu_bar">
              <li className="mobile_menu_close">
                <div
                  onClick={mobile_menu_close2}
                  className="mobile_menu_border"
                >
                  <span></span>
                </div>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>國家搜尋</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>語言搜尋</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>條件式搜尋</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>報名流程</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>遊學資訊</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>學校比較</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>會員中心</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="mobil_menu_arrow"
                  icon={faAngleRight}
                />
                <span>聯絡我們</span>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
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
