import React, { FC } from 'react';
import './TablePagination.scss';

// Models
import { Pagination } from '../../../models/Pagination.model';

// Icons
import { CaretIcon } from '../../common/Icons';

interface Props {
  pagination: Pagination;
  onPageChanged: (page: number) => void;
}

const TablePagination: FC<Props> = (props) => {
  const { pagination, onPageChanged } = props;
  const { page, pageSize, totalPages, totalItems } = pagination;

  const start = (page - 1) * 10 + 1;
  const end = page * pageSize > totalItems ? totalItems : page * pageSize;

  const renderCounts = () => {
    if (totalItems > 0) {
      return (
        <>
          <span className='count start'>{start}</span>
          <span className='dash'>-</span>
          <span className='count end'>{end}</span>
          <span className='of'>of</span>
        </>
      );
    }
    return null;
  };

  return (
    <div className='pagination'>
      <div className='pagination__counts'>
        {renderCounts()}
        <span className='count total'>{totalItems}</span>
        <span className='results'>result{totalItems !== 1 ? 's' : ''}</span>
      </div>
      <div className='pagination__controls'>
        <button
          aria-label='First Page'
          disabled={page === 1}
          onClick={() => onPageChanged(1)}
          className='control control--edge'
        >
          <CaretIcon direction='left' />
          <CaretIcon direction='left' />
        </button>
        <button
          aria-label='Previous Page'
          disabled={page === 1}
          onClick={() => onPageChanged(page - 1)}
          className='control'
        >
          <CaretIcon direction='left' />
        </button>
        <button
          aria-label='Next Page'
          disabled={page === totalPages}
          onClick={() => onPageChanged(page + 1)}
          className='control'
        >
          <CaretIcon direction='right' />
        </button>
        <button
          aria-label='Last Page'
          disabled={page === totalPages}
          onClick={() => onPageChanged(totalPages)}
          className='control control--edge'
        >
          <CaretIcon direction='right' />
          <CaretIcon direction='right' />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
