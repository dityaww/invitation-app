import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DesktopImg from './assets/desktop-img.jpg'
import CoverImg from './assets/cover-img.jpg'
import Bride from './assets/section-3.webp'
import WeddingGift from './assets/wedding-gift.jpeg'
import LiveStream from './assets/live-stream.jpeg'
import LoveStory from './assets/love-story.jpeg'
import Footer1 from './assets/footer-1.jpg'
import Footer2 from './assets/footer-2.jpg'
import Footer3 from './assets/footer-3.jpg'
import audioFile from './assets/bg-sound.mp3'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import './css/input.css'

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio] = useState(new Audio(audioFile))

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <section className='flex h-[100vh] min-h-screen'>
        <div className="md:w-[70%] hidden fixed md:block h-screen">
          <img src={DesktopImg} alt="err" className='h-[100vh] brightness-[0.6] contrast-[0.8]' />
          <div className="absolute top-0 p-10">
            <h2 className='text-[rgb(254,254,254)] font-bold text-base uppercase font-poppins tracking-[2px] mb-8'>wedding announcement</h2>
            <h1 className='uppercase text-[72px] font-light leading-[72px] text-gray-200 mb-5'>tiffany & <br /> jared</h1>
            <p className='text-[rgb(254,254,254)] text-[16px] leading-6 font-newsreader italic font-light w-1/2'>"Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."</p>
            
            <div className="flex items-center gap-2 pl-2">
              <hr className='w-3' />
              <p className='text-[rgb(254,254,254)] text-[16px] font-newsreader italic font-light'>Sapardi Djoko Damono</p>
            </div>
          </div>
          <div className="absolute bottom-10 left-10">
            <div className="bg-red-500 p-4 rounded-[6px] hover:cursor-pointer" onClick={toggleAudio}>  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:w-[70%] hidden md:block"></div>
        
        <div className="relative md:w-[30%] w-full">
          <div className={`${isClicked ? 'hidden' : ''}`}>
            <img src={CoverImg} alt="err" className='h-[100vh] w-full brightness-[0.6] contrast-[0.8]' />
            
            <div className="absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
              <h2 className='text-[rgb(254,254,254)] font-bold text-base uppercase font-poppins tracking-[2px] mb-8 absolute top-20'>wedding announcement</h2>
              <div className="flex flex-col items-center">
                <h1 className='uppercase text-[36px] font-light leading-[43px] text-gray-200'>tiffany & jared</h1>
                <h3 className='font-newsreader italic text-[rgb(254,254,254)] font-light text-[36px] leading-[43px]'>#TImetoshaRE</h3>
              </div>
              <button onClick={() => {
                setIsClicked(!isClicked)
                toggleAudio()
                }} className='text-black font-newsreader font-normal text-[18px] bg-white px-8 py-1 absolute bottom-56 rounded-[4px]'>Open</button>
            </div>
          </div>

          <div className={`${isClicked ? '' : 'hidden'} transition duration-1000`}>
            <section className='relative'>
              <img src={CoverImg} alt="err" className='h-[100vh] brightness-[0.6] contrast-[0.8]' />
              <div className="absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
                <h2 className='text-[rgb(254,254,254)] font-bold text-base uppercase font-poppins tracking-[2px] mb-8 absolute top-20'>wedding announcement</h2>
                <div className="flex flex-col items-center">
                  <h1 className='uppercase text-[36px] font-light leading-[43px] text-gray-200'>tiffany & jared</h1>
                  <h3 className='font-newsreader italic text-[rgb(254,254,254)] font-light text-[36px] leading-[43px]'>#TImetoshaRE</h3>
                </div>
                <button onClick={handleScroll} className='text-[rgb(254,254,254)] font-bold text-[14px] leading-[17px] absolute bottom-10 right-10 rounded-[4px] uppercase font-poppins'>scroll to begin</button>
              </div>
            </section>

            <section className='relative my-20'>
              <div className="my-14 flex flex-col items-center gap-8 px-20">
                <h4 className='uppercase font-poppins font-bold text-[12px] leading-[18px] text-[rgb(26,27,29)]'>dear mr-mrs-ms, <br /> family & friends</h4>
                <h2 className='text-center font-medium text-[32px] leading-[38px] text-[rgb(26,27,29)]'>Welcome to <br />Tiffany & Jared's<br /> Wedding Website</h2>
                <p className='text-center font-newsreader font-normal italic text-[18px] leading-[27px] text-[rgb(26,27,29)]'>Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.</p>
              </div>

              <div className="flex gap-5 overflow-hidden">
                <img src={CoverImg} alt="err" className='w-60' />
                <img src={CoverImg} alt="err" className='w-60' />
              </div>

              <div className="flex float-end gap-2 bottom-0 right-0 my-5 mr-8">
                <button className='border py-1 px-8'>back</button>
                <button className='border py-1 px-8'>next</button>
              </div>
            </section>

            <section className='relative my-10'>
              <div className="flex flex-col items-center gap-10">
                <h4 className='font-poppins font-bold leading-[24px] text-[16px] text-[rgb(26,27,29)]'>MEET THE BRIDE & GROOM</h4>
                <img src={Bride} alt="" className='w-60 h-60 object-cover'/>
                <div className="flex flex-col items-center">
                  <h3 className='font-thin uppercase'>tifanny smith</h3>
                  <h5>@tiffanyinvitato</h5>
                  <p className='font-normal italic font-newsreader text-[18px] leading-[27px] text-[rgb(26,27,29)]'>The Daughter of Mr. Smith & Mrs. Bellyna</p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className='font-thin uppercase'>robin jared lucas</h3>
                  <h5>@jaredinvitato</h5>
                  <p className='font-normal italic font-newsreader text-[18px] leading-[27px] text-[rgb(26,27,29)]'>The Son of Mr. Lucas & Mrs. Anita</p>
                </div>
              </div>
            </section>

            <section className='bg-[#F9F7F4]'>
              <div className="py-10 px-10 flex flex-col items-center gap-4">
                <p className='text-center font-newsreader font-normal italic text-[18px] leading-[27px]'>“And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”</p>
                <div className="">
                  <p className='font-poppins font-bold text-[16px] text-[rgb(26,27,29)] leading-[24px] uppercase tracking-[2px]'>- Q.S. Ar-Rum: 21</p>
                </div>
              </div>
            </section>

            <section className='pt-10'>
              <div className="flex flex-col gap-4 px-10">
                <h3 className='uppercase font-popins font-bold text-[16px] leading-[19px] text-[rgb(26,27,29)] tracking-[2px]'>place & time</h3>
                <h2 className='font-thin text-[28px] leading-[34px] text-[rgb(26,27,29)]'>Holy Matrimony</h2>
                <div className="">
                  <p className='font-newsreader font-normal text-[18px] leading-[27px] text-[rgb(26,27,29)]'>Date: Monday, 26 February 2024</p>
                  <p className='font-newsreader font-normal text-[18px] leading-[27px] text-[rgb(26,27,29)]'>Time: 10.00 WIB</p>
                </div>
              </div>
              <div className="mt-14">
                <div className="relative">
                  <img src={WeddingGift} alt="err" className='h-[280px] w-full object-cover brightness-75 contrast-[0.9]' />
                  <div className="absolute top-0 flex flex-col gap-2 items-center w-full h-full justify-center">
                    <p className='font-thin text-[28px] leading-[34px] text-[rgb(254,254,254)]'>Wedding Gift</p>
                    <button className='bg-white px-6 py-2 italic font-thin text-[18px] leading-[22px]'>Send Gift</button>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <img src={LiveStream} alt="err" className='h-[280px] w-full object-cover brightness-75 contrast-[0.9]' />
                  <div className="absolute top-0 flex flex-col gap-2 items-center w-full h-full justify-center">
                    <p className='font-thin text-[28px] leading-[34px] text-[rgb(254,254,254)]'>Live Stream</p>
                    <button className='bg-white px-6 py-2 italic font-thin text-[18px] leading-[22px]'>Open via Youtube</button>
                  </div>
                </div>
              </div>
            </section>

            <section className='py-10'>
              <div className="flex flex-col items-center gap-8">
                <h3 className='text-center font-medium text-[28px] leading-[34px] text-[rgb(26,27,29)]'>Tiffany & Jared are <br />Getting Married!</h3>
                <img src={LoveStory} alt="err" className='w-[240px] h-[330px]' />
                <a href="#" className='uppercase underline font-poppins font-semibold text-[1rem] leading-[24px] tracking-[2px] text-[rgb(26,27,29)]'>watch our video</a>
                <div className='w-1/2 flex flex-col gap-4 items-center'>
                  <h3 className='text-center'>9 April 2024</h3>
                  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint ipsa possimus vero earum corrupti deserunt eum exercitationem. Beatae rem fugit nemo doloribus molestiae distinctio voluptatem sit excepturi fuga delectus?</p>
                  <div className="flex gap-2">
                    <button className='border py-1 px-6'>back</button>
                    <button className='border py-1 px-6'>next</button>
                  </div>
                </div>
              </div>
            </section>

            <section className='py-10 bg-[#F9F7F4]'>
              <div className="flex flex-col items-center gap-4 px-20">
                <h3 className='capitalize font-thin text-[32px] leading-[38px] text-[rgb(26,27,29)]'>prayers & wishes</h3>
                <p className='text-[18px] leading-[27px] text-[rgb(26,27,29)] text-center font-normal font-newsreader'>Please leave your sincere prayers and wishes to us and our family:</p>
                <form action="" className='flex flex-col gap-4 w-3/4'>
                  <input type="text" id='name' name='name' className='py-2 px-4 outline-neutral-300 border border-neutral-200' placeholder='Name'/>
                  <input type="text" id='relationship' name='relationship' className='py-2 px-4 outline-neutral-300 border border-neutral-200' placeholder='The Relationship'/>
                  <textarea name="wish" id="wish" cols="0" rows="4" className='py-2 px-4 outline-neutral-300 border border-neutral-200' placeholder='Prayers & Wishes'/>
                  <input type="submit" value="Submit" className='px-6 py-2 bg-[#cdc1b1] w-fit rounded-[6px] text-neutral-50 italic font-newsreader' />
                </form>
              </div>
            </section>

            <section className='py-10'>
              <div className="px-20">
                <div className="flex flex-col items-center gap-12">
                  <p className='text-center'>It will be a joy for us if you are still willing to give your blessing from afar. Thank you for all the words, prayers, and attention given.</p>
                  <div className="flex gap-4">
                    <div className="border w-[60px] h-[70px] justify-center flex flex-col items-center bg-[#f9f7f4]">
                      <h3 className='font-normal text-[28px] leading-[36px]'>0</h3>
                      <p className='italic font-newsreader text-[12px] leading-[18px] text-[rgb(26,27,29)]'>Days</p>
                    </div>
                    <div className="border w-[60px] h-[70px] justify-center flex flex-col items-center bg-[#f9f7f4]">
                      <h3 className='font-normal text-[28px] leading-[36px]'>0</h3>
                      <p className='italic font-newsreader text-[12px] leading-[18px] text-[rgb(26,27,29)]'>Hours</p>
                    </div>
                    <div className="border w-[60px] h-[70px] justify-center flex flex-col items-center bg-[#f9f7f4]">
                      <h3 className='font-normal text-[28px] leading-[36px]'>0</h3>
                      <p className='italic font-newsreader text-[12px] leading-[18px] text-[rgb(26,27,29)]'>Minutes</p>
                    </div>
                    <div className="border w-[60px] h-[70px] justify-center flex flex-col items-center bg-[#f9f7f4]">
                      <h3 className='font-normal text-[28px] leading-[36px]'>0</h3>
                      <p className='italic font-newsreader text-[12px] leading-[18px] text-[rgb(26,27,29)]'>Seconds</p>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="flex items-center flex-col gap-10">
                    <h3 className='font-poppins tracking-[2px] font-semibold uppercase'>our sincere,</h3>
                    <div className="flex flex-col items-center gap-4">
                      <h2 className='uppercase font-thin text-[32px] leading-[38px] text-[rgb(26,27,29)]'>tiffany & jared</h2>
                      <h2 className='font-thin text-[32px] leading-[38px] text-[rgb(26,27,29)] font-newsreader italic'>#TImetoshaRE</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-20">
                <img src={Footer1} alt="err" className='h-[180px] w-full object-cover' />
                <img src={Footer2} alt="err" className='h-[180px] w-full object-cover' />
                <img src={Footer3} alt="err" className='h-[180px] w-full object-cover' />
              </div>
            </section>

            <footer className='flex flex-col items-center pb-10'>
              <h2 className='font-newsreader font-normal text-[16px] leading-[24px] text-[rgb(26,27,29)]'>Invitato</h2>
              <a href="https://invitato.net" className='font-newsreader font-normal hover:underline hover:cursor-pointer text-[14px] leading-[21px] text-[rgb(26,27,29)]'>Created with Love by Invitato</a>
              <a href="https://www.youtube.com/watch?v=imq9Sea2uq0" className='font-newsreader font-normal hover:underline hover:cursor-pointer text-[14px] leading-[21px] text-[rgb(26,27,29)]'>Song by So Far, So Good - Don Williams</a>
              <p className='font-newsreader font-normal text-[14px] leading-[21px] text-[rgb(26,27,29)]'>&copy; 2024 Tiffany & Jared. All Rights Reserved</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
