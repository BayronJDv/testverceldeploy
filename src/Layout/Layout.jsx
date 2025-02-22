import React, { Children } from 'react'
import './Layout.css'
import Header from './header/Header'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    
    <main className='layoutcontent'>{children}</main>
    <Footer />
    </>
    
  );
};

export default Layout;