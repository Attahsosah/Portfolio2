import React from 'react'
import {PhoneIcon , MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

function ContactMe({}: Props) {
    const { register, 
        handleSubmit,
         formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:sosahattah55@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen   flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center top-20'>
         <h3 className='absolute top-0 uppercase tracking-[20px] text-[#2b4970] text-2xl pt-4'>Contact</h3>
         <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I am here to help.
                <span className=' decoration-[#F7AB0A]/50 underline '>Send  me a message </span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-2xl tracking-[10px]'>+25761369539</p>

                </div>
                

            </div>
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                  <EnvelopeIcon className='text-[#2b4970] h-7 w-7 animate-pulse'/>
                  <p className=' text-lg md:text-2xl tracking-[10px] '>sosahattah55@gmail.com</p>

                </div>
                

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className='contactInput'  type="text" />
                    <input {...register('email')}placeholder="Email" className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className='contactInput'  type="text" />
                <textarea {...register('message')} placeholder="Message"  className='contactInput'></textarea>
                <button type='submit' className='bg-[#2b4970] hover:bg-[#213958] transition transform duration-2000 ease-in-out py-5 px-10 rounded-md text-[#000000] font-bold text-lg hover:text-black'>
                    Submit
                    </button>

            </form>
         </div>

        </div>
  )
}

export default ContactMe