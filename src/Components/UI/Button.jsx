export default function Button({ children, textOnly, className, ...props }) {
  //   const cssClasses = textOnly ? `text-button ${classaName}` : `button ${classaName}`;
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
