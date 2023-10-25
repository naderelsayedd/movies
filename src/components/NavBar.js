import React from 'react'

export default function NavBar({search}) {
  const onSearch = (word) =>{
    search(word);
  }
  return (
    <div>
    <nav className="navbar bg-body-secondray">
    <div className="container">
      <form className="d-flex w-100" role="search">
        <input className="form-control me-2" onChange={(e) =>onSearch(e.target.value)} type="search" placeholder="ابحث عن الفيلم ...." aria-label="Search" />
      </form>
    </div>
  </nav>
    </div>
  )
}
