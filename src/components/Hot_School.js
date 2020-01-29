import React from 'react'
import Rating from '@material-ui/lab/Rating'
import { faCircle,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Hot_School() {
  return (
    <>
      <div className="school">
        <h2>熱門學校</h2>
      </div>
      <div className="wrap">
        <div className="inner">
          <div className="box">
            <div className="topic">
              <img src={require('../image/topic-01.png')} />
            </div>
            <div className="pic">
              <img src={require('../image/school/112-1.jpg')} />
            </div>
            <div className="txt">
              <div className="no1">
                {'No.1'}
                <img src={require('../image/icon-crown-01.svg')} />
              </div>
              <a href="#">{'CPILS'}</a>
              <div>
                <Rating
                  name="read-only"
                  value={4.0}
                  readOnly
                  size="small"
                  className="rating"
                />
                <span className="point">4.0</span>
              </div>
              <div className="review">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                {'14評論'}
              </div>
              <div>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <span className="Philippines">{'菲律賓'}</span>
                {' / '}
                <span className="Cebu">{'宿霧'}</span>
              </div>
              <div className="mySchool">
                {'我的學校'}
                <img src={require('../image/icon-add.svg')} />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="topic">
              <img src={require('../image/topic-02.png')} />
            </div>
            <div className="pic">
              <img
                src={require('../image/school/239-international house.jpg')}
              />
            </div>
            <div className="txt">
              <div className="no2">
                {'No.2'}
                <img src={require('../image/icon-crown-02.svg')} />
              </div>
              <a href="#">{'IH - Brisbane'}</a>
              <div>
                <Rating
                  name="read-only"
                  value={4.0}
                  readOnly
                  size="small"
                  className="rating"
                />
                <span className="point">4.0</span>
              </div>
              <div className="review">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                {'3評論'}
              </div>
              <div>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <span className="Philippines">{'澳洲'}</span>
                {' / '}
                <span className="Cebu">{'布里斯本'}</span>
              </div>
              <div className="mySchool">
                {'我的學校'}
                <img src={require('../image/icon-add.svg')} />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="topic">
              <img src={require('../image/topic-03.png')} />
            </div>
            <div className="pic">
              <img src={require('../image/school/180819205640981.png')} />
            </div>
            <div className="txt">
              <div className="no3">
                {'No.3'}
                <img src={require('../image/icon-crown-03.svg')} />
              </div>
              <a href="#">{'東京銀星日本語學校'}</a>
              <div>
                <Rating
                  name="read-only"
                  value={4.0}
                  readOnly
                  size="small"
                  className="rating"
                />
                <span className="point">4.0</span>
              </div>
              <div className="review">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                {'5評論'}
              </div>
              <div>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <span className="Philippines">{'日本'}</span>
                {' / '}
                <span className="Cebu">{'東京'}</span>
              </div>
              <div className="mySchool">
                {'我的學校'}
                <img src={require('../image/icon-add.svg')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more">
        <span>查看更多</span>
        <FontAwesomeIcon className="arrow" icon={faChevronRight} />
      </div>
    </>
  )
}

export default Hot_School
