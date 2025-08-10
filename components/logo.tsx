import  Image  from 'next/image';
import logopic from '../public/sblogoicon.png';

export default function Logo() {
    return(
        <Image
            src={logopic}
            alt="Silvabak Cloud Tech Logo"
            className="size-[40px] rounded-full"
        />
    );
}