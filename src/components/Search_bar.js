import React from 'react'
import IconSchool from '../image/icon-university.svg';
import IconSearch from '../image/icon-search.svg';

const Search_bar = () => {
  return (
    <>
      <div className="search">
        <div className="container">
          <ul>
            <li className='title'>
            <img src={IconSchool} className='search_schoolIcon' />
            尋找學校</li>
            <li>
              <input className='inputText' placeholder="輸入學校名稱"></input>
            </li>
            <li className='or' >{'或'}</li>
            <li>
              <select className='inputText'>
                <option>選擇留學國家</option>
                <option>日本</option>
                <option>韓國</option>
                <option>加拿大</option>
                <option>菲律賓</option>
                <option>澳洲</option>
              </select>
            </li>
            <li>
              <select className='inputText'>
                <option>選擇留學城市</option>
                <option>日本</option>
                <option>韓國</option>
                <option>加拿大</option>
                <option>菲律賓</option>
                <option>澳洲</option>
              </select>
            </li>
            <li className='search_btn'>
              <button>
              <img src={IconSearch} />
              {'搜尋'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search_bar
