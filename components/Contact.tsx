'use client'

import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Popup from './Popup'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useLanguage()
  const { selectedTariff } = useTariff()

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // const validatePhone = (phone: string): boolean => {
  //   const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  //   return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  // }

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {}

    const firstName = formData.get('first-name') as string
    const lastName = formData.get('last-name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone-number') as string
    const message = formData.get('message') as string

    // First name validation
    if (!firstName || firstName.trim().length === 0) {
      errors.firstName = t('validation.firstName.required')
    } else if (firstName.trim().length < 2) {
      errors.firstName = t('validation.firstName.minLength')
    }

    // // Last name validation
    // if (!lastName || lastName.trim().length === 0) {
    //   errors.lastName = t('validation.lastName.required')
    // } else if (lastName.trim().length < 2) {
    //   errors.lastName = t('validation.lastName.minLength')
    // }

    // Email validation
    if (!email || email.trim().length === 0) {
      errors.email = t('validation.email.required')
    } else if (!validateEmail(email)) {
      errors.email = t('validation.email.invalid')
    }

    // // Phone validation
    // if (!phone || phone.trim().length === 0) {
    //   errors.phone = t('validation.phone.required')
    // } else if (!validatePhone(phone)) {
    //   errors.phone = t('validation.phone.invalid')
    // }

    // // Message validation
    // if (!message || message.trim().length === 0) {
    //   errors.message = t('validation.message.required')
    // } else if (message.trim().length < 10) {
    //   errors.message = t('validation.message.minLength')
    // }

    return errors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setFormErrors({})

    const formData = new FormData(event.currentTarget)

    // Validate form
    const errors = validateForm(formData)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsLoading(false)
      return
    }
    try {
      const response = await fetch('https://formspree.io/f/xjkknzdd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsPopupOpen(true)
        formRef.current?.reset()
        setFormErrors({})
        setTimeout(() => setIsPopupOpen(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('An error occurred while sending the message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id='contact' className='relative isolate bg-white dark:bg-gray-900'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <AnimatedSection className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 dark:bg-transparent ring-1 ring-gray-900/10 dark:ring-white/5 lg:w-1/2'>
              <svg
                aria-hidden='true'
                className='absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'>
                <defs>
                  <pattern
                    x='100%'
                    y={-1}
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    patternUnits='userSpaceOnUse'>
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect
                  fill='white'
                  className='dark:hidden'
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                />
                <svg
                  x='100%'
                  y={-1}
                  className='overflow-visible fill-gray-50 dark:fill-gray-800/20'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect
                  fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden='true'
                className='absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]'>
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20'
                />
              </div>
            </div>
            <h2 className='text-lg text-primary mb-2'>{t('contact.subtitle')}</h2>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
              {t('contact.description')
                .split('\n')
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <BuildingOffice2Icon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>{t('contact.address')}</dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <PhoneIcon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>
                  <a href='tel:+33626932734' className='hover:text-gray-900 dark:hover:text-white'>
                    +33 6 26 93 27 34
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <EnvelopeIcon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>
                  <a
                    href='mailto:sardorbek.sidikov7@gmail.com'
                    className='hover:text-gray-900 dark:hover:text-white'>
                    sardorbek.sidikov7@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <form
            id='contact-form'
            ref={formRef}
            onSubmit={handleSubmit}
            className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
            <h3 className='text-center text-3xl font-bold mb-4 text-card-foreground pb-6'>
              {t('contact.title')}
            </h3>
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                    {t('contact.firstName')}
                  </label>{' '}
                  <div className='mt-2.5'>
                    <input
                      placeholder={t('contact.placeholder.firstName')}
                      id='first-name'
                      name='first-name'
                      type='text'
                      autoComplete='given-name'
                      className={`block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:ring-white/10 sm:text-sm sm:leading-6 ${
                        formErrors.firstName
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-300 focus:ring-primary'
                      }`}
                    />
                    <AnimatePresence>
                      {formErrors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                          className='mt-1 text-sm text-red-500 dark:text-red-400'>
                          {formErrors.firstName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                    {t('contact.lastName')}
                  </label>{' '}
                  <div className='mt-2.5'>
                    <input
                      id='last-name'
                      name='last-name'
                      placeholder={t('contact.placeholder.lastName')}
                      type='text'
                      autoComplete='family-name'
                      className={`block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:ring-white/10 sm:text-sm sm:leading-6 ${
                        formErrors.lastName
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-300 focus:ring-primary'
                      }`}
                    />
                    {formErrors.lastName && (
                      <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                    {t('contact.email')}
                  </label>{' '}
                  <div className='mt-2.5'>
                    <input
                      placeholder={t('contact.placeholder.email')}
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className={`block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                        formErrors.email
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-300 dark:ring-white/10 focus:ring-primary'
                      }`}
                    />
                    <AnimatePresence>
                      {formErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                          className='mt-1 text-sm text-red-500 dark:text-red-400'>
                          {formErrors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                    {t('contact.phone')}
                  </label>{' '}
                  <div className='mt-2.5'>
                    <input
                      placeholder={t('contact.placeholder.phone')}
                      id='phone-number'
                      name='phone-number'
                      type='tel'
                      autoComplete='tel'
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white ${
                        formErrors.phone
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-300 dark:ring-white/10 focus:ring-primary'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                    {t('contact.message')}
                  </label>{' '}
                  <div className='mt-2.5'>
                    <textarea
                      placeholder={t('contact.placeholder.message')}
                      id='message'
                      name='message'
                      rows={4}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white ${
                        formErrors.message
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-300 dark:ring-white/10 focus:ring-primary'
                      }`}
                      defaultValue={''}
                    />
                    {formErrors.message && (
                      <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {isLoading ? t('contact.sending') : t('contact.send')}
                </button>
              </div>
              {error && <p className='mt-4 text-sm text-red-500 dark:text-red-400'>{error}</p>}
            </div>
          </form>
        </AnimatedSection>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
