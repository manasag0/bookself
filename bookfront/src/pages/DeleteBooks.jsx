import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {useSnackbar}from 'notistack'


const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar() 

  const handleBookDelete =() =>{
    setLoading(true)
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book deleted successfully")
      navigate('/')
      
    })
    .catch((e)=>{
      console.log("Error", e)
      setLoading(false)
      enqueueSnackbar("Failed to delete book")
    })
  }


  return (
    <div className='text-3xl p-4'>
      <BackButton />
      {
        loading ? <Spinner /> : ''
      }
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h1 className='text-2xl'>Are you sure to delete this book?</h1>
        <button onClick={handleBookDelete} className="p-4 bg-red-600 text-white m-8 w-full">Yes, Delete it</button>
    </div>
    </div>
  )
}

export default DeleteBooks
