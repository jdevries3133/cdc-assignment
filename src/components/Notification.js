const Notification = ({ text, setter, variant }) => {
  let divClass;
  if (variant === "info") {
    divClass = "bg-blue-500 text-white px-4 py-2 rounded-md flex items-center";
  } else if (variant === "danger") {
    divClass = "bg-red-500 text-white px-4 py-2 rounded-md flex items-center";
  }

  return (
    <div className={divClass}>
      <span className="font-medium">{text}</span>
      <button className="ml-auto" onClick={() => setter("")}>
        X
      </button>
    </div>
  );
};

export default Notification;
