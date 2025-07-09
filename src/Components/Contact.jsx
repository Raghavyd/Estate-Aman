import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"
function Contact() {
      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fa0b7465-99da-4196-8534-abb3406198f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult();
      toast.error(data.message)
    }
  };
    return (
         <motion.div 
         initial={{opacity:0,x:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
         className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline 
            underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-center text-gray-500  mb-12 max-w-80 mx-auto'>
                Ready to make a move? Let's Build Your Future Together
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input type="text" placeholder='Your Name' name='Name' required 
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                     <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email 
                        <input type="email" placeholder='Your Email' name='Email' required 
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                </div>
                <div>
                    Message
                    <textarea name="Message" placeholder='Enter Your Message ' required className='
                    w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'></textarea>
                </div>
                <div className='px-2 flex justify-center'>
  <button type="submit" className='bg-blue-500 text-white py-2 px-12 rounded'>
    {result?result:"Send Message"}
  </button>
</div>

            </form>
       </motion.div>
    )
}

export default Contact
