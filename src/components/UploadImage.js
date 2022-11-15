import React from 'react';

const UploadImage = () => {
    const submitImage = (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        // console.log(formData);
        const url =
          "https://api.imgbb.com/1/upload?key=6398a21721a1aff038d06b0f7b38db50";
          fetch(url, {
            method: 'POST',
            body: formData,
          })
          .then(res => res.json())
          .then(data => console.log(data.data?.display_url))
          .catch(err => console.log(err))
    }
    return (
      <div className="container mx-auto flex justify-center items-center h-[800px] shadow-lg">
        <form onSubmit={submitImage}>
          <label htmlFor="image">Upload Your Image</label>
          <input name="image" className='border border-gray-900 my-3 w-full ' type="file" id="" />
          <input type="submit" value="Upload" className='text-white py-3 px-3 rounded-lg bg-red-600 my-3' />
        </form>
      </div>
    );
};

export default UploadImage;