import {useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import {useNavigate,useParams} from 'react-router-dom'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const handleDeleteBook = async () => {
    setLoading(true)
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`)
      navigate('/')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <div className="my-4 text-center">         
          <button
            onClick={handleDeleteBook}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  )
}

export default DeleteBook
