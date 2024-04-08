import DOM from 'react-dom'
import './modal.css'


const Modal = (
    {
        children,
        isOpen,
        onClose
    }:{
        children: React.ReactNode,
        isOpen: boolean,
        onClose: () => void
    }
) => {
    
  return (
    <>
        {
            isOpen && DOM.createPortal(
                <>
                    <div 
                        className='backdrop'
                        onClick={onClose}
                    >
                    </div>
                    <>
                        {children}
                    </>                    
                </>,
                document.getElementById('modal-root') as HTMLElement
            )
        }
    </>
  )
}

export default Modal