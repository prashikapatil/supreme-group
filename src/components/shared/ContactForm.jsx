"use client";
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ContactForm =() => {
  const formRef = useRef(null)
  const [submissions, setSubmissions] = useState([]) 
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      setSubmissions((prev) => [...prev, data])
      reset()
      setIsLoading(false)
      toast('Form submitted successfully!')
      console.log('All submissions:', [...submissions, data])
    }, 1000)
  }

  return (
    <section className="w-full">
      <ToastContainer
        position="bottom-center"
        theme="bg-blueDark"
        toastClassName="bg-blueDark shadow-none "
        className="text-sm !px-5 font-medium"
        progressClassName="bg-blueShade h-[1px]"
      />
      <div>
        <form
          noValidate
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full grid gap-4"
        >
          <div className="relative">
            <input
              className={`text-white placeholder:text-white border-b-2 border-opacity-40 py-2 pr-2 w-full text-base bg-transparent outline-none ${
                errors.name ? 'border-rose-600' : 'border-white'
              }`}
              id="name"
              name="name"
              placeholder="Full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="absolute top-full left-0 text-rose-500 text-[12px]">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              className={`text-white placeholder:text-white border-b-2 border-opacity-40 py-2 pr-2 w-full text-base bg-transparent outline-none ${
                errors.email ? 'border-rose-600' : 'border-white'
              }`}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="absolute top-full left-0 text-rose-500 text-[12px]">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              className={`text-white placeholder:text-white border-b-2 border-opacity-40 py-2 pr-2 w-full text-base bg-transparent outline-none ${
                errors.company ? 'border-rose-600' : 'border-white'
              }`}
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              {...register('company', { required: 'Company is required' })}
            />
            {errors.company && (
              <span className="absolute top-full left-0 text-rose-500 text-[12px]">
                {errors.company.message}
              </span>
            )}
          </div>

          <div>
            <textarea
              rows={3}
              id="message"
              name="message"
              placeholder="Message"
              className="text-white placeholder:text-white border-b-2 border-opacity-40 py-2 pr-2 w-full text-base bg-transparent outline-none border-white"
              {...register('message')}
            />
          </div>

          <div className="w-full">
            <button
              disabled={isLoading}
              type="submit"
              className="text-white border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-70"
            >
              {isLoading ? 'Loading...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactForm;