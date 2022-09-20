import React from 'react'
import { Button } from '../Button'

interface ModalProps {
  children: React.ReactNode
  onCancel: () => void
  onConfirm: () => void
}

export function ConfirmDialog({ children, onCancel, onConfirm }: ModalProps) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full sm:my-8 sm:max-w-lg ">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button onClick={onConfirm} className="sm:ml-3 mb-3 sm:mb-0">
              Confirm
            </Button>
            <Button onClick={onCancel} variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
