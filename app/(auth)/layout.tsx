const Layout = ({children}: {children : React.ReactNode}) =>{
    return(
        <div className="grid place-items-center min-h-screen w-full">
            {children}
        </div>
    )
}

export default Layout;