interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

      <p className="text-slate-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}

export default AuthHeader;