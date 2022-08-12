import React from 'react'

export default function Pagination({goToPrevPage, goToNextPage}) {
  return (
    <div>
        {goToPrevPage && <button onClick={goToPrevPage}>previous</button>}
        {goToNextPage && <button onClick={goToNextPage}>next</button>}
    </div>
  )
}
