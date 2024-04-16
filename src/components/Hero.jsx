import { setGlobalState, useGlobalState } from '../store'
// Import the profile image
import Profile_pic from "../images/Profile_pic.jpg"
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      {/* Below given is a div and has 2 components on is image and other one is an h1 tag. Both must get half of the screeen*/}
      {/* That is the left 50% side of the div must be image and the right 50% of the div must be the h1 tag*/}
      <div className='flex items-center space-x-2'>
        <img src={Profile_pic} alt="Profile Picture" className="w-1/2 h-90" />
        <div className="flex flex-col" style={{ marginLeft: "70px" }}>
          <h1
            className="font-bold leading-tight first-letter:capitalize text-4xl"
          >
            <span className="capitalize">
              Seeking <span className='text-cyan-300'>Financial Support </span> for < br /><span className='text-cyan-300'> Urgent Medical Needs?</span> <br />

              OR < br />

              Considering To <span className='text-cyan-300'>Contribute </span> <br />towards a <span className='text-cyan-300'>noble cause!</span>
            </span>
            <br />
          </ h1>

          <div className="flex justify-center items-center space-x-2 pt-[160px]">
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-cyan-300 leading-5">0%</span>
              <span>Platform fee</span>
            </div>

            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-cyan-300 leading-5">30 Seconds</span>
              <span>Publish Post</span>
            </div>

            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-cyan-300 leading-5">100%</span>
              <span>Verified Seeker</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Div with 2 big buttons*/}
      <div className="flex justify-center items-center space-x-2 mt-[50px]">
        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-cyan-600 font-medium text-xs leading-tight uppercase text-cyan-600 rounded-full shadow-md bg-transparent hover:bg-cyan-300 hover:text-white"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Start Fundraising
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-cyan-600
        font-medium text-xs leading-tight uppercase text-cyan-600
        rounded-full shadow-md bg-transparent hover:bg-cyan-300
        hover:text-white"
        >
          Stop Fundraising
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-cyan-400 leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-cyan-400
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-cyan-400
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
