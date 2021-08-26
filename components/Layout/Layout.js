import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Meta from "../Meta/Meta"

const Layout = ({children}) => {
    return (
        <>
        <Meta/>
        <Header/>
        <main className="main">{children}
        <Contact/></main>
        <Footer/>
            
        </>
    )
}

export default Layout
