import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import logo1 from "../../../public/images/cob/logos/lnt.png";
import aa from "../../../public/images/cob/logos/aa.png";
import kh from "../../../public/images/cob/logos/kh.png";
import bt from "../../../public/images/cob/logos/bt.png";
import pal from "../../../public/images/cob/logos/pal.png";
import sa from "../../../public/images/cob/logos/sa.png";
import sta from "../../../public/images/cob/logos/sta.png";
import vf from "../../../public/images/cob/logos/vf.png";
import il from "../../../public/images/cob/logos/il.png";
import sax from "../../../public/images/cob/logos/sax.png";
import eg from "../../../public/images/cob/logos/eg.png";
import sd from "../../../public/images/cob/logos/sd.png";

const logos = [logo1, aa, bt, il, kh, pal, sa, sta, vf, sax, eg, sd];



const OurClients: React.FC = () => {
    const logosRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (logosRef.current) {
            const ul = logosRef.current;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            if (ul.nextSibling) {
                (ul.nextSibling as HTMLElement).setAttribute('aria-hidden', 'true');
            }
        }
    }, []);

    return (
        <div className="my-6 lg:my-20 container mx-auto">

            <div
                className="w-full py-6 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-6 lg:[&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={index} className='flex-shrink-0'>
                            <Image src={logo} alt={`client logo ${index}`} className='lg:h-12 w-auto' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default OurClients;
