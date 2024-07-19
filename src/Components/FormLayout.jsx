import React, {useState} from 'react';
import { useForm } from "react-hook-form";


const FormLayout = () => {

    // <======================================== NOTES START ==============================================>

        // Libraries used : "react-form-hook" for form validation , "tailwind-css" for css
        // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.

    // <======================================== NOTES END ==============================================>


    const host = 'http://localhost:5001/register'
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        let {date, email,notes, name, phoneNumber, selectTag,something} = data;
        let result = await fetch(host, {
            method: "POST",
            body : JSON.stringify({date, email, notes, name, phoneNumber,selectTag, something}),
            headers: {'Content-Type' : 'application/json'}
        })
        result = await result.json(result)
        // console.log(result)
        const message = `Request:-%0aName: ${data.name},%0aPhone Number: ${data.phoneNumber},%0aEmail: ${data.email},%0aSelect: ${data.selectTag},%0aSomething: ${data.something},%0aDate: ${data.date},%0aNotes: ${data.notes} `
        window.open(`https://api.whatsapp.com/send?phone=919895251516&text=${message}`);
        window.location.reload()
    }


  

  return (
    <>
       <div className=' bg-black/[.8] h-[650px] max-w-[530px] w-full rounded-lg flex flex-col justify-between'>
            <form action="post" onSubmit={handleSubmit(onSubmit)}> 
                <p className='text-3xl text-white font-semibold tracking-wide'>Get in Touch!</p>
                <input 
                    type="text" 
                    placeholder='Enter your name' 
                    className='w-full pl-4 p-3 mt-1 !outline-0 border-0 bg-sky-100 rounded-lg' 
                    {...register("name", 
                    { 
                        required: true, 
                        maxLength: 30,
                        pattern: /^[a-zA-Z ]{3,30}$/
                    })}   
                />
                {console.log(errors.name)}
                {errors.name && <p className='text-yellow-500 -mb-4 ml-1'>Enter proper name</p>}
                <input 
                    type="text" 
                    placeholder='Enter your phone number' 
                    className='w-full pl-4 p-3 mt-6 !outline-0 border-0 bg-sky-100 rounded-lg'
                    {...register("phoneNumber", 
                    { 
                        required: true, 
                        maxLength: 10,
                        pattern: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
                    })} 
                />
                {errors.phoneNumber && <p className='text-yellow-500 -mb-4 ml-1'>Enter proper phone number</p>}
                <input 
                    type="text" 
                    id='email'
                    placeholder='Email ID' 
                    className='w-full pl-4 p-3 mt-6 !outline-0 hover:drop-shadow-lg border-0 bg-sky-100 rounded-lg'
                    {...register("email",
                    { 
                        required: true, 
                        maxLength: 30, 
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                    })} 
                />
                {errors.email && <p className='text-yellow-500 -mb-4 ml-1'>Enter proper email</p>}
                <select name="" id="" placeholder='Gender' {...register("selectTag", { required: true })} className='w-full pl-4 pr-10 p-3 mt-6 !outline-0 hover:drop-shadow-lg border-0 bg-sky-100 rounded-lg'>
                    <option value="" hidden>Select a Value</option>
                    <option value="1">Value-1</option>
                    <option value="2">Vlaue-2</option>
                    <option value="3">Value-3</option>
                </select>
                {errors.selectTag && <p className='text-yellow-500 -mb-4 ml-1'>Select Something</p>}
                <div className='flex justify-between'>   
                    <div className='w-[47%]'>
                        <input 
                            type="text" 
                            placeholder='Enter location' 
                            className='w-full pl-4 p-3 mt-6 mr-3 !outline-0 border-0 bg-sky-100 rounded-lg'
                            {...register("something", { required: true, maxLength: 10 })} 
                        /> 
                        {errors.something && <p className='text-yellow-500 absolute ml-1'>Type Something</p>}
                    </div>
                    
                    <div className='w-[47%]'>
                        <input 
                            type="date" 
                            placeholder='Date' 
                            className='w-full pl-4 p-3 mt-6 mr-3 !outline-0 hover:drop-shadow-lg border-0 bg-sky-100 rounded-lg'
                            {...register("date", { required: true })} 
                        /> 
                        {errors.date && <p className='text-yellow-500 absolute ml-1'>Select Date</p>}
                    </div>
                       
                </div>
                <textarea 
                    name="" 
                    id="" 
                    rows="3"
                    placeholder='Notes'
                    className='w-full pl-4 p-3 mt-6 mr-3 !outline-0 border-0 bg-sky-100 rounded-lg'
                    style={{resize:"none"}}
                    {...register("notes", { required: true, maxLength: 10 })}
                />
                {errors.date && <p className='text-yellow-500 absolute ml-1'>Type something</p>}
                <div className='flex justify-center'>
                    <button 
                        type="submit" 
                        value="Submit" 
                        className='h-10 w-1/3 mt-7 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold tracking-wider rounded-lg' 
                    >Submit</button>
                </div>
            </form>
            
            <div className='flex flex-row justify-between items-center'>
                <p className='text-white mb-0 flex'>Follow us on :
                    {/* You Tube   */}
                    <a href="#">
                        <img src="../images/youtube.svg" className='w-6 h-6 ml-2' alt="YouTube" />
                    </a>
                    
                    {/* Facebook  */}
                    <a href="#">
                        <img src="../images/fb.svg" className='w-6 h-6 ml-1' alt="Facebook" />
                    </a>
                    
                    {/* Instagram  */}
                    <a href="#">
                        <img src="../images/insta.svg" className='w-6 h-6 ml-1' alt="Insta" />
                    </a>

                    {/* Twitter  */}
                    <a href="#">
                        <img src="../images/twitter.svg" className='w-6 h-6 ml-1' alt="Twitter" />
                    </a>
                    
                    {/* Pinterest  */}
                    <a href="#">
                        <img src="../images/pinterest.svg" className='w-6 h-6 ml-1' alt="" />
                    </a>
                    
                    {/* Linkedin  */}
                    <a href="#">
                        <img src="../images/linkedin.svg" className='w-6 h-6 ml-1' alt="" />
                    </a>
                    
                </p>

                <a href="https://tltechnologies.net/" target="_blank"> <img 
                    src="../images/powered.png" 
                    alt="TL Logo"
                    className='h-16'
                /> </a>
            </div>
        </div>
       
    </>
  )
}

export default FormLayout