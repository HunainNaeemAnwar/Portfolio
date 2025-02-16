import Link from "next/link";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="block py-3 text-white text-[20px] font-Satoshi rounded md:p-0 hover:text-slate-300"
    >
      {title}
    </Link>
  );
};
export default NavLink;
