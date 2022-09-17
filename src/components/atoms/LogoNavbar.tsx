interface buttonProps {
  iconsSolo?: boolean
}

export const LogoNavabar = (props: buttonProps) => {
  const { iconsSolo, ...rest } = props

  return (
    <>
      <div className='flex items-center justify-between w-full '>
       <h2 className='text-xl uppercase font-semibold'>
        Logo
       </h2>
      </div>
    </>
  )
}
