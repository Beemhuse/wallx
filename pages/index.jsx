import Head from 'next/head'
import * as React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdArrowDropDown} from 'react-icons/md'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div className='font-main'>
      <Head>
        <title>Wallx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header >

        <div className="relative overflow-hidden bg-no-repeat bg-cover sm:h-full" style={{
         background: ` linear-gradient(107.47deg, rgba(79, 55, 146, 0.8036) -4.29%, rgba(124, 61, 206, 0.98) 121.97%)`,
          backgroundPosition: " center", backgroundImage: `url('https://res.cloudinary.com/dj3zrsni6/image/upload/v1669287512/future-resume/wallx/Group_48095689_muhakc.svg')`,
          // maxHeight:"50vh"
        }}>
          <Navbar />
          <div className=' px-6 py-3  flex mt-3 ' >
            <div className=''>

            <h2 className='text-3xl lg:text-5xl text-white sm:w-2/3'>Provide your customers with quick and simple financial services. </h2>
            <p className='mt-3 text-white sm:w-2/3'>A retail service that offers incredible discounts and commissions for individuals, and small and
              medium-sized businesses. Sign up and begin to earn! </p>
              <button type="button" class="text-main bg-white mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Get Started
    <BsFillArrowRightCircleFill className="ml-2 -mr-1 w-5 h-5 text-primary" />
    {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
</button> 
            </div>
<img className='h-80 w-1/2 hidden lg:block sm:block mt-10 ' src='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669287823/future-resume/wallx/Group_48095714_zvkshm.svg'/>
          </div>

        </div>
      </header>
      <main >
        <div className='mt-5 flex flex-col items-center justify-center px-6 py-3 sm:w-1/2 sm:text-center sm:m-auto sm:mt-8' id='offer'>
          <h3 className='text-xs lg:text-2xl font-normal'>We Offer</h3>
          <h2 className='font-medium text-1xl lg:text-2xl mt-2 text-justify sm:hidden '>Retail Service for Individuals,
            Small and Medium Businesses.</h2>
          <h2 className=' font-medium text-4xl mt-2 text-justify hidden lg:block'>A Point Of Sale Service For Small And Medium Size Businesses.</h2>
          <p className=' text-center mt-2'>Sell from anywhere as a Point of Sale Agent on WallX Vend and earn instant commissions. </p>
        </div>



<div className=' px-6 py-3 flex flex-col lg:flex-row-reverse lg:flex space-x-2 gap-2 h-fit lg:justify-between'>
<img className='lg:h-96 hidden' src='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669368485/future-resume/wallx/image_45_vdhoej.svg'/>


  <div className=" lg:w-1/2  h-full">
<div className="mt-2">
  <h4 className='text-xs font-normal lg:text-sm text-dark '>POS Services for customers</h4>
  <p className='text-xl lg:text-4xl font-medium lg:w-full text-dark font-main ' >Instantaneously send and receive money to 
any wallx agent or bank 
account instantly.</p>
</div>
<div className="lg:grid lg:grid-cols-2 flex-wrap hidden lg:block   lg:w-2/3  mt-5">
  <div className="text-center p-5 bg-secondary w-40 h-24 rounded text-primary">
    Generate Pin Payment
  </div>
  <div className="text-center p-5 bg-primary w-40 h-24 rounded text-white mt-4 ml-3">
    Enter Customer Receiver Details
  </div>
  <div className="text-center p-5 w-40 bg-primary rounded h-24 text-white">
    Enter Secret Code
  </div>
  <div className="text-center p-5 w-40 bg-secondary rounded h-24 text-primary mt-4 ml-3">
    Select Payment Channel
  </div>
</div>

  </div>

<div className='w-1/2 sm:w-auto'>
  
<img className='hidden lg:block  lg:h-96' src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669370487/future-resume/wallx/Group_48095666_eemte8.svg" alt="" />
<img className='block lg:hidden w-fill h-full' src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669318642/future-resume/wallx/image_40_nucen3.svg" alt="" />
</div>

</div>

<div className=' px-6 py-3 flex flex-col lg:flex-row-reverse lg:justify-around lg:items-center mt-4'>
<div className="mt-2">
  <h4 className='text-xs font-normal'>How can I become a WallX POS agent? </h4>
  <p className='text-2xl font-medium'>With WallX, being an agent is 
now simple.</p>
<button type="button" class="text-main lg:hidden border-solid border border-black mb-5 bg-white mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Get Started
    <BsFillArrowRightCircleFill className="ml-2 -mr-1 w-5 h-5 text-primary" />
    {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
</button> 
<div className="mt-2 bg-no-repeat bg-cover relative hidden lg:block" style={{
          // background: ` linear-gradient(107.47deg, rgba(79, 55, 146, 0.8036) -4.29%, rgba(124, 61, 206, 0.98) 121.97%)`,
          backgroundPosition: "top top", backgroundImage: `url('https://res.cloudinary.com/dj3zrsni6/image/upload/v1669372569/future-resume/wallx/Rectangle_39924_lskrgv.svg')`,
          // maxHeight:"50vh"
        }}>
  
<div class="w-full grid grid-cols-1 gap-4 " >
    <button type="button" class="inline-flex bg-secondary relative items-center py-4 px-6 w-full text-sm font-medium rounded-lg border-b  hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        {/* <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> */}
        <img className='lg:w-4 mr-4 w-4 h-4 fill-current bg-primary' src ='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669373570/future-resume/wallx/Vector_1_lepr95.svg'/>
        Register on WallX Vend
    </button>
    <button type="button" class="inline-flex  relative items-center py-4 px-6 w-full text-sm font-medium rounded-lg border-b  hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    <img className='lg:w-4 mr-4 w-4 h-4 fill-current bg-primary' src ='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669373586/future-resume/wallx/Vector_2_ts3nkf.svg'/>        Open an account 
    </button>
    <button type="button" class="inline-flex  relative items-center py-4 px-6 w-full text-sm font-medium rounded-lg border-b  hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    <img className='lg:w-4 mr-4 w-4 h-4 fill-current bg-primary' src ='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669373600/future-resume/wallx/Vector_3_tcs3aa.svg'/>        Finance your wallet 
    </button>
    <button type="button" class="inline-flex  relative items-center py-4 px-6 w-full text-sm font-medium rounded-lg border-b  hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    <img className='lg:w-4 mr-4 w-4 h-4 fill-current bg-primary' src ='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669373615/future-resume/wallx/Vector_4_iwu7ii.svg'/>        Finance your wallet 
        Start executing financial transactions.
    </button>
</div>

</div>
</div>


<div className=''>
<img src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669319106/future-resume/wallx/Rectangle_39902_tikebd.svg" alt="" />
</div>
</div>



{/* lists */}
<div className="bg-variant py-8 hidden lg:block">

<div className="mt-2 flex  justify-between px-5 py-8 relative overflow-hidden bg-no-repeat bg-cover bg-variant" style={{
          // background: ` linear-gradient(107.47deg, rgba(79, 55, 146, 0.8036) -4.29%, rgba(124, 61, 206, 0.98) 121.97%)`,
          backgroundPosition: "cover", background: `url('https://res.cloudinary.com/dj3zrsni6/image/upload/v1669375091/future-resume/wallx/Rectangle_248_ak6ast.svg')`,
          // maxHeight:"50vh"
        }}>
<div className="mt-2">
<h2 className='ml-10 text-white mb-5 mt-4'>How to Top Up WallX Account</h2>                  

<ol class="relative border-l border-white dark:border-gray-700 text-white ml-10 mb-10 ">
    <li class="mb-5 ml-4">
        <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white dark:text-white-500">Step 1</time>
        <h3 class="text-lg font-semibold text-white-900 dark:text-white">On Login, Click on Topup</h3>
        {/* <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
    </li>
    <li class="mb-5 ml-4">
        <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-gray-500">Step 2</time>
        <h3 class="text-lg font-semibold text-white-900 dark:text-white">Enter Amount</h3>
        {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
    </li>
    <li class="ml-4 mb-5">
        <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-gray-500">Step 3</time>
        <h3 class="text-lg font-semibold text-white-900 dark:text-white">Select Payment Method</h3>
        {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
    </li>
    <li class="ml-4 mb-5">
        <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-gray-500">Step 4</time>
        <h3 class="text-lg font-semibold text-white-900 dark:text-white">Select Payment Channel</h3>
        {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-gray-500">Step 5</time>
        <h3 class="text-lg font-semibold text-white-900 dark:text-white">Submit Request</h3>
        {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
    </li>
</ol>
</div>
<div className=" mt-10  ">

  
<a href="#" class="flex flex-col items-center mt-10  lg:flex-col lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between  leading-normal">
        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
        <p class="mb-5 font-normal text-xs w-1/2 text-white dark:text-gray-400">You can make a direct transfer to your wallX account 
number from any bank or using a the form.</p>
    </div>
    <img class="object-cover w-full rounded-t-lg lg:h-96  lg:w-full md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669375108/future-resume/wallx/Rectangle_244_nhjcec.svg" alt="" />
</a>

  {/* <p className='text-white w-1/2'>You can make a direct transfer to your wallX account 
number from any bank or using a the form.</p> */}
  {/* <img className='w-4/6 ml-auto mt-10' src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669375108/future-resume/wallx/Rectangle_244_nhjcec.svg" alt="" /> */}
</div>
</div>
</div>
      </main>

      <footer className='mt-4'>

      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
          background: ` linear-gradient(107.47deg, rgba(79, 55, 146, 0.8036) -4.29%, rgba(124, 61, 206, 0.98) 121.97%)`,
          backgroundPosition: " 50%", backgroundImage: `url('https://res.cloudinary.com/dj3zrsni6/image/upload/v1669322491/future-resume/wallx/Frame_36801_dgofyn.svg')`,
          // maxHeight:"50vh"
        }}>
<div className='lg:hidden block'>
          <div className='m-5'>
            <h3 className='text-center text-xl text-white'>Share, Spend With Ease </h3>
          </div>

      <Accordion sx={{background:'transparent',color:'white', borderBottomColor:' white', }} >
        <AccordionSummary
          expandIcon={<MdArrowDropDown style={{color:'white', fontSize:'30px'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background:'transparent',color:'white', border:'transparent', fontSize:'20px'}}>
        <AccordionSummary
          expandIcon={<MdArrowDropDown  style={{color:'white', fontSize:'30px'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background:'transparent', color:'white', borderBottomColor:' white', fontSize:'20px'}} >
      {/* <Typography>Contact</Typography> */}
        
        <AccordionSummary
          expandIcon={<MdArrowDropDown style={{color:'white', fontSize:'30px'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Contact</Typography>
        </AccordionSummary>
      </Accordion>


      <div className='px-6 text-white my-5'>
        <img className='h-8 w-auto' src='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669288210/future-resume/wallx/image_1_srcxqb.svg' />
<div className="flex">
        <div className="flex items-center">

        <p className='text-xs mr-2'>All right reserved</p> <AiOutlineCopyright className=''/><p className='text-xs mr-2'>2022</p>

        </div>
<img src='https://res.cloudinary.com/dj3zrsni6/image/upload/v1669322485/future-resume/wallx/wallx1d-removebg-preview_1_vhmwta.svg'/>
</div>
      </div>
</div>


{/* desktop */}


<footer class=" dark:bg-gray-900 py-8 px-6 hidden lg:block">
  <h3 className='text-4xl text-gray-200 text-left px-6 tracking-widest'>Share, Spend With Ease </h3>
    <div class="grid grid-cols-2  py-8 px-6 lg:grid-cols-5">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-400">Pages</h2>
            <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Services</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Pricing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Customers</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-400">Company</h2>
            <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Team</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">FAQ</a>
                </li>
                {/* <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li> */}
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-400">Contact</h2>
            <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">hello@wallx.co</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">+234(70) 6328-3502</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-400">Follow Us</h2>
            <div class="flex mt-4 space-x-4 sm:justify-start md:mt-0">
            <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
        
        </div>
        </div>
<div>
  <img className='h-auto' src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669322485/future-resume/wallx/wallx1d-removebg-preview_1_vhmwta.svg" alt="" />
</div>

    </div>
    <div class="py-6 px-4  dark:bg-gray-700 lg:flex md:items-center md:justify-between  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <img className='w-8' src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1669286415/future-resume/wallx/wallx_tgjb0g.svg" alt="" />
      <div>
        <p className='text-gray-300 text-xs'>21 Nyese Ibrahim Tella Street, Oral Estate, Elegnaza Bus-stop, Lekki Expressway. Lagos</p>
      </div>
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">All Rights Reserved.?? 2022  
        </span>
       
    </div>
</footer>


    </div>

        
      </footer>

    </div>
  )
}
