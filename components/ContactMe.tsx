import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {}

function ContactMe({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:sosahattah55@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center top-20 pb-24 pt-12'>
            <h3 className='sm:hidden absolute top-2 uppercase tracking-[15px] sm:tracking-[20px] sm:space-x-4 text-[#2b4970] text-xl sm:text-2xl pt-4'>Contact</h3>
            <div className='flex flex-col space-y-6 sm:space-y-10'>
                <h4 className='text-2xl sm:text-4xl font-extrabold text-center tracking-tight text-[#1a2a38] font-sans mb-2'>
                    Have an Idea or Opportunity? Let’s Talk.
                </h4>
                <div className='flex justify-center'>
                  <span className='text-lg sm:text-2xl italic font-semibold text-[#F7AB0A] underline decoration-[#F7AB0A]/50'>
                    Send me a message
                  </span>
                </div>

                <div className='space-y-6 sm:space-y-10'>
                    <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-6 sm:h-7 w-6 sm:w-7 animate-pulse' />
                        <p className='text-lg sm:text-2xl tracking-[5px] sm:tracking-[10px]'>+25761369539</p>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#2b4970] h-6 sm:h-7 w-6 sm:w-7 animate-pulse' />
                        <p className='text-md sm:text-2xl tracking-[5px] sm:tracking-[10px]'>sosahattah55@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full sm:w-fit mx-auto'>
                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
                        <input {...register('name')} placeholder="Name" className='contactInput w-full sm:w-auto' type="text" />
                        <input {...register('email')} placeholder="Email" className='contactInput w-full sm:w-auto' type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder="Message" className='contactInput'></textarea>
                    <button type='submit' className='bg-[#2b4970] hover:bg-[#213958] transition duration-200 ease-in-out py-3 sm:py-5 px-6 sm:px-10 rounded-md text-white font-bold text-md sm:text-lg hover:text-black'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;
