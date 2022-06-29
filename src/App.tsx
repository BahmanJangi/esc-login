import React, { useState } from 'react';
import LogoMolecule from './components/molecule/logo';
import Title from './components/title';
import Description from './components/description/index';
import ButtonEnter from './components/button/index';
import InputText from './components/input';

const App = () => {
  const publicClassName = 'bg-transparent border-b-[1px] border-gray-300 text-sm leading-8 outline-none mt-6 w-[95%] focus:border-blue-500 focus:border-b-2 transition-all duration-100 text-gray-600';
  return (
    <div className='flex justify-center mt-16'>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 max-w-full text-center rounded-xl card-shadow dark:bg-gray-800 dark:border-gray-700 py-5 px-7 mb-5">
        <LogoMolecule />
        <Title />
        <Description />
        <div id='code-number' className='flex text-gray-500 focus-within:text-blue-500'>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-6 w-6 mt-8" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M15.244 21.366a2.164 2.164 0 0 1-3.061 0l-8.549-8.549A2.164 2.164 0 0 1 3 11.287V5.163C3 3.97 3.97 3 5.164 3h6.123c.573 0 1.124.228 1.53.634l8.549 8.549a2.164 2.164 0 0 1 0 3.061l-6.122 6.122Z" /><path d="M6.5 6.5L7 7" /></g></svg>
          <InputText inputVal="codeNumber" labelVal='شماره ملی' classNameVal={publicClassName} />
        </div>
        <div id='mobile-number' className='flex text-gray-500 focus-within:text-blue-500'>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-6 w-6 mt-9" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z" /></svg>
          <InputText inputVal="mobileNumber" labelVal='شماره تلفن همراه' classNameVal={publicClassName} />
        </div>
        <div id='captcha' className='flex justify-center text-gray-500 focus-within:text-blue-500'>
          <div className='flex justify-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-6 w-6 mt-9" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3 10c-.24 0-.45.09-.59.25c-.14.15-.2.37-.17.61l.5 2.99C2.82 14.5 3.4 15 4 15h3c.64 0 1.36-.56 1.5-1.18l1.06-3.19c.04-.13.01-.32-.06-.44c-.11-.12-.28-.19-.5-.19H3m4 7H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92C1.43 8.34 2.19 8 3 8h6c.83 0 1.58.35 2.06.96c.11.15.21.31.29.49c.43-.09.87-.09 1.29 0c.08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92c.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17m8-7c-.22 0-.39.07-.5.19c-.08.12-.1.31-.05.51l1.01 3.05c.18.69.9 1.25 1.54 1.25h3c.59 0 1.18-.5 1.25-1.11l.51-3.07c.03-.2-.03-.42-.17-.57A.769.769 0 0 0 21 10h-6Z" /></svg>
            <InputText inputVal='captcha1' labelVal='تصویر امنیتی' classNameVal={publicClassName} />
          </div>
          <img src={require("./assets/images/captchsrvlt.png")} alt="captcha" className=' flex mt-8 mr-4' />
          <img src={require("./assets/images/")} alt="captcha" className=' flex mt-8 mr-4' />
        </div>
        <ButtonEnter />
        <a href='#' className='text-blue-500 hover:text-blue-600 transition-colors duration-300 font-medium'>ورود با شماره ملی سرپرست</a>
      </div>
    </div>

  );
}

export default App;
