const Button1 = ({ text, link, className = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-dark text-white rounded-full   px-7 pt-2  pb-[10px] hover:text-[#FFA587]  transition shadow-[0_4px_24px_rgba(0,0,0,0.25)] ${className}`}
    >
      {text}
    </a>
  );
};

export default Button1;
