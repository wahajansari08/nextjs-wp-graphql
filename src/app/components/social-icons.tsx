import Image from 'next/image';

const socialIcons = [
    {
        name:"X",
        url:"https://x.com/",
        image:"/x.svg",
        alt:"Follow us on X"
    },
    {
        name:"GitHub",
        url:"https://github.com/",
        image:"/github.svg",
        alt:"Follow us on GitHub"
    }
]

export function SocialIcons(){
    return(
        <div className='mb-4 flex justify-between'>
            <h2 className="text-lg">Social Media</h2>
            <div className="flex gap-2">
                {socialIcons.map((icon)=>(
                    <a
                    key={icon.name}
                    href={icon.url} 
                    target="_blank"
                    rel="noopener noreferre"
                    className='border p-1 rounded-md hover-scale-100 transition duration-3'>
                        <Image 
                        src={`/social-icons/${icon.image}`}
                        alt={icon.alt}
                        width={20}
                        height={20}
                        loading='eager'
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}