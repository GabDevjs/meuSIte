import logo from '../../assets/img/boreal-Text-black.png'
import icon from '../../assets/img/icon-preto.png'
import logoWhite from '../../assets/img/boreal-Text-white.png'
import iconWhite from '../../assets/img/icon-white.png'
import Image from 'next/image'

interface buttonProps {
  iconsSolo?: boolean
}

export const LogoNavabar = (props: buttonProps) => {
  const { iconsSolo, ...rest } = props

  return (
    <>
      <div className='flex items-center justify-between w-full '>
        <>
          <div className='dark:hidden'>
            <Image src={logo} alt='texto logo' priority />
          </div>
          <div className='hidden dark:inline'>
            <Image src={logoWhite} alt='texto logo' priority />
          </div>
        </>
        <div className='dark:hidden'>
          <div className='hidden md:inline'>
            <Image src={icon} alt='icon logo' priority />
          </div>
        </div>
        <div className='hidden dark:inline'>
          <div className='hidden md:inline'>
            <Image src={iconWhite} alt='icon logo' priority />
          </div>
        </div>
      </div>
    </>
  )
}
