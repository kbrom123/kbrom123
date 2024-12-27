import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/books", {
        title,
        author,
        publishedYear,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishedYear" className="text-xl mr-4 text-gray-500">
            Publish Year:
          </label>
          <input
            type="text"
            id="publishedYear"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button onClick={handleSaveBook} className="p-2 bg-sky-300 m-8">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
