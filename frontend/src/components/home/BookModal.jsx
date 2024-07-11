/* eslint-disable react/prop-types */
// import React from 'react'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { IoMdPricetags } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={event => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl px-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />

        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>

        <h4 className='my-2 text-gray-500'>{book._id}</h4>

        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-2xl text-red-300' />
          <h2 className='my-1'>{book.title}</h2>
        </div>

        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-2xl text-red-300' />
          <h2 className='my-1'>{book.author}</h2>
        </div>

        <div className='flex justify-start items-center gap-x-2'>
          <IoMdPricetags className='text-2xl text-red-300' />
          <h2 className='my-1'>$ {book.price}</h2>
        </div>

        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          erat enim. Duis malesuada rutrum posuere. Nullam finibus risus ut
          tempus aliquam. In at congue ligula, a bibendum orci. Sed hendrerit
          ultricies venenatis. Pellentesque interdum quam eu lectus tincidunt,
          ac sollicitudin felis ultricies. Sed nec ligula ut odio convallis
          condimentum.
        </p>
      </div>
    </div>
  )
}

export default BookModal
