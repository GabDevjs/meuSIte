interface buttonProps {
  name?: string
  ref?: any
  children?: any
  className?: string
  onClick?: (event: any) => void
  disabled?: boolean
  rounded?: boolean
}

export const Button = (props: buttonProps) => {
  const {
    name,
    ref,
    children,
    className,
    onClick,
    rounded,
    disabled,
    ...rest
  } = props

  return (
    <button
      type='submit'
      className={` flex justify-center align-center border border-transparent rounded-xl shadow-md font-medium  hover:scale-105 transition-all ease-in-out duration-150 ${
        rounded ? 'rounded-full lg:rounded-md' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={` ${rounded ? 'pr-0' : 'pr-1'}`}>{children}</span>
      <span className={`${rounded ? 'hidden lg:inline' : ''}`}>{name}</span>
    </button>
  )
}
