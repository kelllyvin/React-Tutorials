import React from 'react';
// multiple return // teneary return 
const Conditionalrendring = () => {
    const isLoading = false;
    const isSubmitting = true;
    const isError = true;

    if(isLoading){
        return <h1>LOADING...</h1>
    }
  return (
    <div>
      <h1>MAIN CONTENT</h1>
      <button className="mybtn">
        {isSubmitting ? "submitting..." : "submit"}
      </button>
      {isError && <h1>Error loading page, try again</h1>}
    </div>
  );
}

export default Conditionalrendring;