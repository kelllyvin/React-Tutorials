import React from 'react'
import { tweets } from '../data';
import { Link } from 'react-router-dom';

const Timeline = () => {
  return (
    <div className='py-7'>
      <section className="flex gap-3">
        <div className="w-[300px] border border-secondary p-3">

            <h1 className='text-3xl font-bold'>Trending topics</h1>
            <ol className='list-decimal'>
                  <li>Sport</li>
                  <li>Technology</li>
                  <li>Health talk</li>
                  <li>Football</li>
            </ol>
        </div>


        <div className="w-[600px] border border-secondary p-3">
            
            <h1 className='text-3xl font-bold'>Timeline</h1>
            <section className='flex gap-3 flex-col'>
             {
                tweets.map((singletweet)=>{
                    const {id, profileName, handle, comments, likes, tweet} =singletweet
                    return <div key={id} className='border-y-2 border-gray-400 p-2'>
                        <div className='flex gap-2'>
                            <h1 className='text-2xl font-bold'>{profileName}</h1>
                            <span className='text-gray-300'>@{handle}</span>
                        </div>
                        <p className='my-2'>{tweet}</p>
                        <div className='flex gap-3 items-center'>
                            <p>{likes} likes</p>
                            <p>{comments.length} comments</p>
                        </div>
                             <Link to={`/timeline/${id}`}> Read More</Link>
                    </div>
                })
             }
            </section>

        </div>
        <div className="w-[300px] border border-secondary p-3">

            <h1 className='text-xl font-bold'>Welcome John Doe</h1>
            <p className='text-gray-300'>@johndoe001</p>
            <p className='my-3'>I am a frontend developer</p>
            <input type="text" placeholder='search for users' className='input' />
        </div>
      </section>
    </div>
  );
}

export default Timeline