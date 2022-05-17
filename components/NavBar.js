import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <div>
                <img src="/logo.svg" alt="fail"/>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Menu1</a>
                </Link>
                <Link href="/menu2">
                    <a className={router.pathname === "/menu2" ? "active" : ""}>Menu2</a>
                </Link>
                <Link href="/menu3">
                    <a className={router.pathname === "/menu3" ? "active" : ""}>Menu3</a>
                </Link>
                <Link href="/menu4">
                    <a className={router.pathname === "/menu4" ? "active" : ""}>Menu4</a>
                </Link>
            </div>
            <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 10px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 30px;
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 30px;
          align-items: center;
        }
      `}</style>
        </nav>
    );
}