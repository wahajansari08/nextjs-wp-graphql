import Image from 'next/image';

export function Hero(){
    return(
        <div className="mb-4">
            <h1 className="font-bold text-2xl mb-2">Hi, I'm Ready.</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim quis nam quibusdam voluptatem omnis maiores nemo ad, architecto commodi tempore tenetur ipsam laudantium nobis odit blanditiis culpa qui sit.</p>
            <Image src="/hero.webp" width={700} height="102" quality={70} placeholder="blur" blurDataURL="/hero-placeholder.png" loading="eager" alt="Freelance web dev.."/>
        </div>
    )
}