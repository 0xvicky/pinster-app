import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {SiAddthis} from "react-icons/si";
import {FaCircleUser} from "react-icons/fa6";
import {AiFillCloseSquare} from "react-icons/ai";
import {IoSettings} from "react-icons/io5";
import {IoMdLogOut} from "react-icons/io";
import {useFetchUser} from "../../utils/useFetchUser";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
  const [userNav, setUserNav] = useState(false);

  const user = useFetchUser();
  const navigate = useNavigate();

  return (
    <div className='flex'>
      <nav className='flex justify-between p-4 py-6 bg-gradient-to-r from-[#000000] to-[#434343] text-white w-screen'>
        <section className='sec-1 text-3xl font-semibold'>Pinster</section>
        <div className='hidden sm:flex'>
          <SiAddthis
            fontSize={38}
            onClick={() => {
              navigate("/addpin");
            }}
          />
        </div>
        <section className='sec-2 flex items-center space-x-5'>
          <div className='mx-5'>
            <FaSearch fontSize={24} />
          </div>
          <div className='sm:hidden'>
            <SiAddthis
              fontSize={24}
              onClick={() => {
                navigate("/addpin");
              }}
            />
          </div>
          <div className='relative '>
            {!userNav && (
              <FaCircleUser
                fontSize={28}
                onClick={() => setUserNav(true)}
              />
            )}

            {userNav && (
              <div className='absolute text-white  w-36 h-36 space-y-1 -right-4 top-[43px] bg-gradient-to-br'>
                <AiFillCloseSquare
                  fontSize={25}
                  className='absolute left-1 top-1'
                  onClick={() => {
                    setUserNav(false);
                  }}
                />
                <div className='flex flex-col items-end space-y-4 p-2'>
                  <div className='flex items-center space-x-2'>
                    <img
                      src={user?.picture}
                      alt=''
                      className='rounded-full h-6 w-6'
                    />
                    <p>Profile</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <IoSettings />
                    <p>Settings</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <IoMdLogOut />
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
