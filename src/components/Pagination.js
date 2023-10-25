import ReactPaginate from "react-paginate";
function Paginate({getPage , pageCount}) {
    const handlePageClick = (data) =>{
        console.log(data.selected + 1);
        getPage(data.selected + 1)
    }
    if(pageCount > 500){
      pageCount = 500
    }
  return (
    <div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center mt-3 mb-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'} 
        previousClassName={'page-item'} 
        nextClassName={'page-item'} 
        breakClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Paginate;