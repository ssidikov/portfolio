'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'

interface LanguageToggleProps {
  onLanguageChange: (language: string) => void
  currentLanguage: string
}

export default function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (language: string) => {
    onLanguageChange(language)
    setIsOpen(false)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-indigo-500'
        aria-expanded={isOpen}
        aria-haspopup='true'>
        <Globe className='h-4 w-4' />
        <span>{currentLanguage === 'fr' ? 'FR' : 'EN'}</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10'>
          <div className='py-1' role='menu' aria-orientation='vertical'>
            <button
              onClick={() => selectLanguage('fr')}
              className={`block px-4 py-2 text-sm w-full text-left ${
                currentLanguage === 'fr'
                  ? 'bg-gray-100 dark:bg-gray-700 text-indigo-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              role='menuitem'>
              Français
            </button>
            <button
              onClick={() => selectLanguage('en')}
              className={`block px-4 py-2 text-sm w-full text-left ${
                currentLanguage === 'en'
                  ? 'bg-gray-100 dark:bg-gray-700 text-indigo-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              role='menuitem'>
              English
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
