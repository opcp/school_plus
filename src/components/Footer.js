import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_main">
          <div className="footer_icon">
            <img src={require('../image/logo.svg')} />
          </div>
          <section className="footer_wrap">
            <div className="footer_text">
              <span>{'海外遊學心得│語言學校比較推薦、選擇適合的遊學生活'}</span>
            </div>
            <div className="footer_nav">
              <ul>
                <li>
                  <a href="#">關於我們</a>
                </li>
                <li>
                  <a href="#">學校比較</a>
                </li>
                <li>
                  <a href="#">會員中心</a>
                </li>
                <li>
                  <a href="#">聯絡我們</a>
                </li>
              </ul>
            </div>
            <div className="footer_mail">
              {'E-mail : '}
              <span>
                <a href="#">schoolaplusinfo@gmail.com</a>
              </span>
              {' / '}
              {'LINE ID : '}
              <span>
                <a href="#">@schoolaplus</a>
              </span>
            </div>
          </section>
        </div>
      </footer>
      <footer className='footer_copyright'>
          <div className='text'>
              <span>Copyright © 2018 School A+ All Rights Reserved.</span>
          </div>
      </footer>
    </>
  )
}

export default Footer
