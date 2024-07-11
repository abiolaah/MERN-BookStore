import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import { useSnackbar } from 'notistack'

import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  const { enqueueSnackbar } = useSnackbar()

  //function to handle Delete button
  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5001/api/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar(`Book deleted successfully`, {variant: 'success'});
        navigate('/')
      })
      .catch(error => {
        setLoading(false)
        // alert('An error occurred. Please Check console')
        enqueueSnackbar('Error! Something went wrong', {variant: 'error'})
        console.log(error)
      })
  }

  //function to handle Cancel Button.
  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>

      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>
          Are You Sure You want to delete this book?{' '}
        </h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete
        </button>

        <button
          type='button'
          className='p-4 bg-neutral-600 text-white m-8 w-full'
          onClick={handleCancel}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
