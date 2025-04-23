import React from 'react'
import { Link } from 'react-router-dom'

const Singletweet = () => {
  return (
    <div>
      <div className="  ml-5 bg-accent rounded-sm text-black w-[140px] h-10 text-center py-1 ">
        <Link to="/Timeline">
          <button> Back to timeline</button>
        </Link>
      </div>
    </div>
  );
}

export default Singletweet