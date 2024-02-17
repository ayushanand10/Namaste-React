const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1 className='text-3xl font-medium p-4 m-4'>Contact Us Page</h1>
      <form
        action=''
        className='px-8 py-4'
      >
        <input
          type='text'
          className='border border-blue-400 rounded p-2 mx-2'
          placeholder='name'
        />
        <input
          type='text'
          className='border border-blue-400 rounded p-2 mx-2'
          placeholder='your message'
        />
        <button className='bg-blue-400 rounded px-6 py-2 mx-2'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
