import Logo from "../logo.svg"
import Image from 'next/image'

export const Maintenance = () => {
    return (
        <div className="grid place-items-center my-64 text-center">
            <a id='logo' className='logo items-center flex'>
                <Image priority src={Logo} className='logo h-48 w-48' height={48} width={48} alt=''/>
            </a>
            <h6 className="text-3xl mt-6 font-semibold text-[clamp(1.5rem,1.318rem + .91vw,2rem)] leading-tight mt-0 mb-2">
                Vi jobbar på vår hemsida just nu...
            </h6>
            <h1 className="text-xl ">Men se till att titta tillbaka snart!</h1>
        </div>
    );
};

export default Maintenance;