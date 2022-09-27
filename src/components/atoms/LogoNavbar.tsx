import  Image  from 'next/image';
import LogoWhite from '../../assets/LogoWhite.png';
import Logo from '../../assets/Logo.png';


interface buttonProps {
  iconsSolo?: boolean
}

export const LogoNavabar = (props: buttonProps) => {
  const { iconsSolo, ...rest } = props

  return (
    <>
      <div className='hidden dark:flex items-center justify-between w-full text-lg p-1.5 border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full '>
        <Image 
          src={LogoWhite}
          alt='Logo'
          width={30}
          height={30}
          priority
        />      
      </div>
      <div className='flex dark:hidden items-center justify-between w-full text-lg p-1.5 border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200 '>
        <Image 
          src={Logo}
          alt='Logo'
          width={30}
          height={30}
          priority
          className='opacity-90'
        />   

      </div>
    </>
  )
}
