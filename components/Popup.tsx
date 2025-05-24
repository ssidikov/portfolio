'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [show, setShow] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      const timer = setTimeout(() => setShow(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!show) return null

  return (
    <div className='fixed inset-16 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50'>
      <div
        className={`max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
        }`}>
        <div className='p-4'>
          <div className='flex items-start'>
            <div className='flex-shrink-0'>
              <CheckCircleIcon className='h-6 w-6 text-green-400' aria-hidden='true' />
            </div>
            <div className='ml-3 w-0 flex-1 pt-0.5'>              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                {t('popup.success.title')}
              </p>
              <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                {t('popup.success.message')}
              </p>
            </div>
            <div className='ml-4 flex-shrink-0 flex'>
              <button
                className='bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={onClose}>
                <span className='sr-only'>Close</span>
                <XMarkIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
