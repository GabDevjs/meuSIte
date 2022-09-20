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
      <div className='hidden dark:flex items-center justify-between w-full '>
        <Image 
          src={LogoWhite}
          alt='Logo'
          width={50}
          height={50}
          priority
        />      
        <h1 className='hidden md:inline-block ml-2 font-bold text-lg'>Flavio Gabriel</h1>

      </div>
      <div className='flex dark:hidden items-center justify-between w-full '>
        <Image 
          src={Logo}
          alt='Logo'
          width={50}
          height={50}
          priority
        />   

          <h1 className='hidden md:inline-block ml-2 font-bold text-lg'>Flavio Gabriel</h1>     
      </div>
    </>
  )
}
