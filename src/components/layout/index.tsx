import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface LayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <div className='bg-slate-100 dark:bg-primary dark:text-primary h-screen flex flex-col'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;