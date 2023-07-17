
import Link from 'next/link';


const links = [{name: 'About', slug: 'about-us'}, 
                {name: 'Contact Us', slug: 'contact'}, 
                {name: 'Services', slug: 'services'}];

const Header = () => {
    return (
        <>
            <header className="container mx-auto px-10 mb-8">
                <nav className="border-b w-full inline-block border-black py-8">
                    <div className="mx:float-left block">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-4xl">
                                MG Protax Services
                            </span>
                        </Link>
                    </div>
                    <div className="float-left contents">
                        {links.map((link) => (
                            <Link key={link.slug} href={`/${link.slug}`}>
                                <span className="float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-xl">
                                    {link.name}
                                </span>
                            </Link>
                        ))}  
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;