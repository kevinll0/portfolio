import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

interface LayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;