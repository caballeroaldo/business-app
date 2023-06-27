
import Link from 'next/link';


const links = [{name: 'About Us', slug: 'about-us'}, 
                {name: 'Contact Us', slug: 'contact'}, 
                {name: 'Services', slug: 'services'}];

const Header = () => {
    return (
        <header className="container mx-auto px-10 mb-8">
            <nav className="border-b w-full inline-block border-white py-8">
                <div className="mx:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl">
                            MG Protax Services
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {links.map((link) => (
                        <Link key={link.slug} href={`/${link.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {link.name}
                            </span>
                        </Link>
                    ))}  
                </div>
            </nav>
        </header>
    );
}

export default Header;