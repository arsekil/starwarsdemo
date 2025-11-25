import { useState } from 'react'

export const SortSelect = ({
  sortOrder,
  onSortChange,
}: {
  sortOrder: { id: number; name: string }[]
  onSortChange: (sortType: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(sortOrder[0]?.name)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (name: string) => {
    setSelected(name)
    setIsOpen(false)
    onSortChange(name)
  }

  return (
    <div className="sorter">
      <div className="sorter_text">Sort by</div>
      <div className="sorter_select">
        <div className="select_trigger" onClick={toggleDropdown}>
          {selected}
        </div>
        {isOpen && (
          <div className="select_menu">
            {sortOrder.map((category) => (
              <div key={category.id} className="select_option" onClick={() => handleOptionClick(category.name)}>
                {category.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
