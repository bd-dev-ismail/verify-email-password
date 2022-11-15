import React from 'react';

const UploadImage = () => {
    const submitImage = (event) => {
        event.preventDefault();
    }
    return (
      <div className="container mx-auto flex justify-center items-center h-[800px] shadow-lg">
        <form onSubmit={submitImage}>
          <label htmlFor="image">Upload Your Image</label>
          <input className='border border-gray-900 my-3 w-full ' type="file" name="image" id="" />
          <input type="submit" value="Upload" className='text-white py-3 px-3 rounded-lg bg-red-600 my-3' />
        </form>
      </div>
    );
};

export default UploadImage;