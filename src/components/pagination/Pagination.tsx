import ReactPaginate from "react-paginate";
import { usePatients } from "../../hooks/usePatients";

function Pagination() {
  const { amountOfPages, page, changePage } = usePatients({ fetch: false });

  return (
    <div className="pagination">
      <ReactPaginate
        pageCount={amountOfPages}
        forcePage={page}
        onPageChange={(p) => changePage(p.selected)}
      />
    </div>
  );
}

export default Pagination;
