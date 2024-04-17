

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return <main className= `${className} max-w-screen min-h-screen bg-black mx-auto text-white` >{children}</main>;
}

export default Container