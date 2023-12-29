import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleBookDelete =() =>{
    setLoading(true)
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
      
    })
    .catch((e)=>{
      console.log("Error", e)
      setLoading(false)

    })
  }


  return (
    <div className='p-4'>
      <BackButton />
      {
        loading ? <Spinner /> : ''
      }
    <div className='flex flex-col items-center border-sky-400 rounded-xl w-[600px] p-8 max-auto'>
        <h1 className='text-2xl'>Are you sure to delete this book?</h1>
        <button onClick={handleBookDelete} className="w-full bg-red-700 hover:bg-red-9">Yes, Delete it</button>
    </div>
    </div>
  )
}

export default DeleteBooks
