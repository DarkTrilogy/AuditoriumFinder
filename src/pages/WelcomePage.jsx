import { useDarkMode } from "../context/DarkModeContext";

function WelcomePage() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "public/hse-light.png" : "public/hse-dark.png";
  return (
    <img
      src={src}
      alt=""
      // расположи изображение по центру - по горизонтали и вертикали -
      //   style={{
      //     display: "block",
      //     margin: "auto",

      //   }}
      // className="w-192 block h-96 object-scale-down text-left"
      //   className="scale-image right-1/5 absolute -top-1/6"
      className="absolute bottom-0 left-auto top-0 m-auto translate-x-60 translate-y-10 scale-image"
    />
  );
}

export default WelcomePage;
