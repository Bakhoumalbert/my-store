import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateArticle = () => {

  const [title, setTitle] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description) return;

    const newArticle = {
      title,
      description,
      imageSrc,
      price,
      created_at: new Date().toLocaleDateString(),
    }
    // send newArticle to server
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    .then((response) => {
      // setTitle("");
      // setDescription("");
      navigate('/');
    })
  }

  return (
    <>
        <div className="mb-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="font-bold text-xl">Post Title</label>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text" 
                            className="border-0 text-gray-500 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" 
                        />
                    </div>
                    <div className="mb-4">
                    <label className="font-bold text-xl">Image URL</label>
                      <input 
                          value={imageSrc}
                          onChange={(e) => setImageSrc(e.target.value)}
                          type="text" 
                          className="border-0 text-gray-500 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" 
                      />
                    </div>
                    <div className="mb-4">
                    <label className="font-bold text-xl">Price</label>
                      <input 
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="number" 
                          className="border-0 text-gray-500 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" 
                      />
                    </div>
                    <div className="mb-8">
                        <label>Post Content</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border-0 text-gray-500 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" ></textarea>
                    </div>
                    <button  className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">Create</button>
                </form>
            </div>
    </>
  )
}
