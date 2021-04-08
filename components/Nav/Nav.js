import Link from 'next/link';
import Image from 'next/image';

function Nav() {
  return (
    <div  className="container min-w-full text-gray-800">
      <div className="bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
        <div className="flex justify-center py-3">
          <Image 
            src="/green-tea.svg"
            alt="green sprout with 4 leaves"
            width={75}
            height={75}
          />
        </div>
        {/* icon attribution <div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <ul className="flex justify-center py-3 text-base font-semibold">
          <li className="inline-block px-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link href="/schedule">
              <a>My Plants</a>
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;