import { Link } from "react-router-dom";

interface AuthFooterProps {
  text: string;
  linkText: string;
  to: string;
}

function AuthFooter({
  text,
  linkText,
  to,
}: AuthFooterProps) {
  return (
    <div className="mt-6 text-center text-sm">

      <span className="text-slate-500">
        {text}
      </span>

      {" "}

      <Link
        to={to}
        className="font-semibold text-blue-600 hover:text-blue-700"
      >
        {linkText}
      </Link>

    </div>
  );
}

export default AuthFooter;