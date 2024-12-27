import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../index.css";
import BookTable from "../components/home/BookTable";
import BookCard from "../components/home/BookCard";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-blue-500 text-white px-4 py-1 rounded-md"
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Books List</h1>
        <Link to="/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl " />
        </Link>
      </div>
      {loading ? <Spinner /> :showType==='table'?( <BookTable books={books} />):(<BookCard books={books} />)}
    </div>
  );
};

export default Home;
