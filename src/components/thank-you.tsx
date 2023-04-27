import Logo from "../logo.svg"
import Image from 'next/image'
import Button, { Type } from "./common/button";

export const ThankYou = () => {
    return (
        <div className=" text-center">
            <div className="grid place-items-center text-center py-12">
                <a id='logo' className='logo items-center flex'>
                    <Image priority src={Logo} className='logo h-48 w-48' height={48} width={48} alt=''/>
                </a>
                <h6 className="text-3xl font-semibold text-[clamp(1.5rem,1.318rem + .91vw,2rem)] leading-tight">
                    hej hå!
                </h6>
            </div>
            <h1 className="text-xl mt-12">William är inte Doris och han är bäst (Emma är näst bäst)</h1>
            <div id="buttons" className="flex mb-6 items-center justify-center gap-10">
                <Button type={Type.PRIMARY} text="Tillbaka" href="/"/>
                <Button type={Type.SECONDARY} text="Tillbaka" href="/"/>
            </div>
        </div>
    );
};

export default ThankYou;