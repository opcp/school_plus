import React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Hot_School() {
  return (
    <>
      <section className="country">
        <div className="country_wrap">
          <div className="school">
            <h2>人氣國家</h2>
          </div>
          <div className="country_item">
            <div className="box">
              <div className="topic">
                <img src={require('../image/topic-01.png')} />
              </div>
              <div className="pic">
                <img src={require('../image/logo/00.png')} />
              </div>
              <div className="txt">
                <div className="no1">
                  {'No.1'}
                  <img src={require('../image/icon-crown-01.svg')} />
                </div>
                <div>
                  <a href="#">{'菲律賓'}</a>
                  <span className="small">PHILIPPINE</span>
                </div>

                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'57 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="topic">
                <img src={require('../image/topic-02.png')} />
              </div>
              <div className="pic">
                <img src={require('../image/logo/888197_flag_512x512.png')} />
              </div>
              <div className="txt">
                <div className="no2">
                  {'No.2'}
                  <img src={require('../image/icon-crown-02.svg')} />
                </div>
                <div>
                  <a href="#">{'澳洲'}</a>
                  <span className="small">AUSTRALIA</span>
                </div>

                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'86 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="topic">
                <img src={require('../image/topic-03.png')} />
              </div>
              <div className="pic">
                <img src={require('../image/logo/japan_flag2.png')} />
              </div>
              <div className="txt">
                <div className="no3">
                  {'No.3'}
                  <img src={require('../image/icon-crown-03.svg')} />
                </div>
                <div>
                  <a href="#">{'日北'}</a>
                  <span className="small">JAPAN</span>
                </div>

                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'79 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="pic">
                <img src={require('../image/logo/Korea_flag2.png')} />
              </div>
              <div className="no4_txt">
                <div className='no4'>
                  <a href="#">{'韓國'}</a>
                  <span className="small">KOREA</span>
                </div>
                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'52 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="pic">
                <img src={require('../image/logo/ireland.png')} />
              </div>
              <div className="no4_txt">
                <div className='no4'>
                  <a href="#">{'愛爾蘭'}</a>
                  <span className="small">IRELAND</span>
                </div>
                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'5 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="pic">
                <img src={require('../image/logo/canada_flag.png')} />
              </div>
              <div className="no4_txt">
                <div className='no4'>
                  <a href="#">{'加拿大'}</a>
                  <span className="small">CANADA</span>
                </div>
                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'6 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="pic">
                <img src={require('../image/logo/Malta_flag.png')} />
              </div>
              <div className="no4_txt">
                <div className='no4'>
                  <a href="#">{'馬爾他'}</a>
                  <span className="small">MALTA</span>
                </div>
                <div className='school_num'>
                {'學校數量達'}
                  <span className="review"> {'0 '}</span>
                  {'所學校'}
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <span>查看更多</span>
            <FontAwesomeIcon className="arrow" icon={faChevronRight} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hot_School
