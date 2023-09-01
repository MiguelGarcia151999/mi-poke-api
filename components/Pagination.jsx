import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="bttn-move-page" onClick={onLeftClick}>
        &#60;
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="bttn-move-page" onClick={onRightClick}>&#62;</button>
    </div>
  );
};

export default Pagination;
