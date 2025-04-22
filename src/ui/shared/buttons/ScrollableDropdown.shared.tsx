import { useState, useRef, useEffect } from 'react';

export const ScrollableDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Actualizar posición del dropdown
  const updateDropdownPosition = () => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      
      dropdownRef.current.style.top = `${buttonRect.bottom + window.scrollY}px`;
      dropdownRef.current.style.left = `${buttonRect.left + window.scrollX}px`;
    }
  };

  // Efecto para actualizar posición al abrir y durante scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    updateDropdownPosition();

    const handleScroll = () => {
      updateDropdownPosition();
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isOpen]);

  return (
    <div className="h-64 overflow-y-auto border p-4">
      {/* Contenido con scroll */}
      {/* <div className="h-96 space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>Elemento de contenido {i + 1}</div>
        ))}
      </div> */}
      
      {/* Botón que trigger el dropdown */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? 'Cerrar Dropdown' : 'Abrir Dropdown'}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-56 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5"
        >
          <div className="px-4 py-2 hover:bg-gray-100">Opción 1</div>
          <div className="px-4 py-2 hover:bg-gray-100">Opción 2</div>
          <div className="px-4 py-2 hover:bg-gray-100">Opción 3</div>
        </div>
      )}
    </div>
  );
};

