import Logo from "../logo.svg"

export const Maintenance = () => {
    return (
        <div className="grid place-items-center my-64">
            <a id='logo' href='/' className='logo items-center flex'>
                <img className='logo h-24 w-24' height={48} src={Logo} alt='Logo'/>
            </a>
            <h6 className="text-3xl mt-6 font-semibold text-[clamp(1.5rem,1.318rem + .91vw,2rem)] leading-tight mt-0 mb-2">
                Vi jobbar på vår hemsida just nu...
            </h6>
            <h1 className="text-xl ">Men se till att titta tillbaka snart!</h1>
        </div>
    );
};

export default Maintenance;