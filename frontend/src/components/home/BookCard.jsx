import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import {BiUserCircle} from "react-icons/bi"
import {PiBookOpenTextLight} from "react-icons/pi"
import PropType from "prop-types"

const BookCard = ({books}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {books.map((book) => (
        <div key={book._id} className="border border-gray-300 rounded-md py-1 m-4 flex-col">
          <div className="flex justify-center items-center gap-4">
            <PiBookOpenTextLight className="text-2xl text-blue-800" />
            <h1 className="text-2xl font-bold">{book.title}</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <BiUserCircle className="text-2xl text-blue-800" />
            <h1 className="text-xl font-bold">{book.author}</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <BsInfoCircle className="text-2xl text-green-800" />
            <Link to={`/show/${book._id}`} className="text-xl font-bold text-green-800">
              Show
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <AiOutlineEdit className="text-2xl text-yellow-600" />
            <Link to={`/edit/${book._id}`} className="text-xl font-bold text-yellow-600">
              Edit
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <MdOutlineDelete className="text-2xl text-red-600" />
            <Link to={`/delete/${book._id}`} className="text-xl font-bold text-red-600">
              Delete
            </Link>
          </div>
        </div>
      ))}    
    </div>
  )
}
BookCard.propTypes = {
  books: PropType.arrayOf(
    PropType.shape({
      _id: PropType.string,
      title: PropType.string,
      author: PropType.string,
      publishedYear: PropType.number,
    })
  ),
}

export default BookCard
