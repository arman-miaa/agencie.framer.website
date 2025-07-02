const Button1 = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-dark text-white rounded-full text-sm px-5 py-[6px] hover:text-main shadow-2xl transition"
    >
      {text}
    </a>
  );
};

export default Button1;
