import Link from "next/link";

export interface NavbarItemProps{

    title:string,
    target:string

}

export default function NavbarItem({title, target}:NavbarItemProps){

    return(

        <Link
        href={target}
        >
            <a className="text-black  items-menu-transition text-[1.563rem] font-medium font-main max-w-[14rem] ml-[1.875rem] mb-[1.563rem]">
                {title}
            </a>
        </Link>

    )


}