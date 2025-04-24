import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { tweets } from '../data'

const Singletweet = () => {
    const {id} =useParams()

   const tweet = tweets.find((Singletweet) => Singletweet.id === id )

  return (
    <div className="container py-10">
     
        <Link to="/Timeline">
          <button className='bg-accent w-40'> Back to timeline</button>
        </Link>
        <div className='mt-5'>
          <div className="flex items-center gap-3">
            <h1 className='font-bold text-2xl'>{tweet.profileName}</h1>
            <p>@{tweet.handle}</p>
          </div>
          <p>{tweet.tweets}</p>
          <div className='flex gap-3'>
            <p>{tweet.likes} Likes</p>
            <p>{tweet.comments.length} comments</p>
          </div>
          <h1 className='font-bold'> Comments</h1>
          <div className='flex flex-col gap-3'>
            {tweet.comments.map((comment,i) =>{
                return <p key={i}> {comment}</p>;
            })}
          </div>
        </div>
      </div>
  
  );
}

export default Singletweet