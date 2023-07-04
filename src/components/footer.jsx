
import Link from 'next/link';


const links = [{name: 'About', slug: 'about-us'}, 
                {name: 'Contact Us', slug: 'contact'}, 
                {name: 'Services', slug: 'services'}];

const Footer = () => {
    return (
        <>
            <footer className="container mx-auto px-10 mb-8">
                <div className=" w-full inline-block border-black py-8">
                    <div className="mx:float-left block">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-3xl">
                                MG Protax Services
                            </span>
                        </Link>
                    </div>
                    <div className="md:float-left md:contents">
                        {links.map((link) => (
                            <Link key={link.slug} href={`/${link.slug}`}>
                                <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                                    {link.name}
                                </span>
                            </Link>
                        ))}  
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;