import  Image  from 'next/image';
import logopic from '../public/icon0.svg';

export default function Logo() {
    return(
        <Image
            src={logopic}
            alt="Silvabak Cloud Tech Logo"
            className="h-14 w-auto"
        />
    );
}