import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5001/api/books')
      .then(response => {
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  //function to switch between table view and card view
  const switchView = () => {
    setShowType(prevShowType => (prevShowType === 'table' ? 'card' : 'table'))
  }

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 roundedlg'
          type='button'
          onClick={switchView}
        >
          {showType === 'table' ? 'Card View' : 'Table View'}
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold my-8'>
          Books List {showType === 'table' ? 'Table' : 'Card'}
        </h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  )
}

export default Home
