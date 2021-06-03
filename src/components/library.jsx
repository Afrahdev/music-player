import React from 'react'
import Librarysong from './Library.Songs'

const Library = ({ Songs }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className="library-songs">
        {Songs.map((song) => (
          <Librarysong Song={song} />
        ))}
      </div>
    </div>
  )
}

export default Library
