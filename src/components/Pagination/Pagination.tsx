/* eslint-disable @typescript-eslint/no-explicit-any */

export const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: {
  currentPage: number
  onPageChange: any
  totalPages: number
}) => {
  const getPaginationItems = () => {
    const items = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i)
      }
      return items
    }

    const startingPages = [1]
    const endPages = [totalPages]
    const rangeCurrent = []

    const leftEnd = Math.max(2, currentPage - 1)
    const rightEnd = Math.min(totalPages - 1, currentPage + 1)

    for (let i = leftEnd; i <= rightEnd; i++) {
      rangeCurrent.push(i)
    }

    if (leftEnd > 2) {
      items.push(...startingPages, '...')
    } else {
      items.push(...startingPages)
    }

    items.push(...rangeCurrent)

    if (rightEnd < totalPages - 1) {
      items.push('...', ...endPages)
    } else if (rightEnd < totalPages) {
      items.push(...endPages)
    }

    return items
  }

  const paginationItems = getPaginationItems()

  return (
    <div className="pagination">
      <button
        className="page_idle page_direction"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {paginationItems.map((item, index) => (
        <span key={index}>
          {item === '...' ? (
            <span className="ellipsis">...</span>
          ) : (
            <button onClick={() => onPageChange(item)} className={item === currentPage ? 'page_active' : 'page_idle'}>
              {item}
            </button>
          )}
        </span>
      ))}

      <button
        className="page_idle page_direction"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
