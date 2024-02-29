import "../Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>To-Do List</h1>

      <h2>
        Whoop, It's{" "}
        {new Date().toLocaleDateString("en-US", { weekday: "long" })}🌝 ☕
      </h2>
    </div>
  );
};
export default Header;
