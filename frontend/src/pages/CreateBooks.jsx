import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import {useSnackbar} from 'notistack'

import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';


const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [price, setPrice] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {enqueueSnackbar} = useSnackbar();

    //function to handle create
    const handleCreateBook = () => {
        const data = {
            title,
            author,
            description,
            publishYear,
            price
        };
        setLoading(true);
        axios.post('http://localhost:5001/api/books', data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar(`${data.title} Book created successfully`, {variant: 'success'});
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            // alert('An error occurred. Please Check console');
            enqueueSnackbar('Error! Something went wrong', {variant: 'error'})
            console.log(error);
        })
    }

    //function to handle Cancel Button.
    const handleCancel = () => {
        navigate('/');
    }
  return (
    <div className='p-4'>
     <BackButton />
     <h1 className='text-3xl my-4'>Create Book</h1>

     {loading ? <Spinner /> : ''}
     <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
     <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Title</label>
        <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
     </div>
     

     <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Author</label>
        <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
     </div>

     <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Description</label>
        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
     </div>

     <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
        type='number'
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
     </div>

     <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Price</label>
        <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
     </div>

     <div className='flex flex-col gap-0'>
     <button className='p-2 bg-sky-300 m-8' onClick={handleCreateBook}>
        Submit
     </button>

     <button type='button' className='p-2 bg-gray-300 m-8' onClick={handleCancel}>Cancel</button>
     </div>
     </div>
    </div>
  )
}

export default CreateBooks
