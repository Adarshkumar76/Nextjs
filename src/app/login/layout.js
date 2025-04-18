import './style.css'
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ul className="login-menu">
            <h4>Login Header: </h4>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/login/student-login">Student Login</Link>
          </li>
          <li>
            <Link href="/login/teacher-login">Teacher Login</Link>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
};
export default Layout;
