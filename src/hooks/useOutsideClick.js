import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );

  // useEffect(
  //   function () {
  //     function handleClick(e) {
  //       // e.target.tagName !== "svg" && e.target.tagName !== "path" для того, чтобы не вызывать функцию close при клике на иконку и тем самым не сбрасывая openId, что при нажатии на открытую иконку закрывать ее при помощи Toggle, а не открывать из за openId === ''
  //       if (
  //         ref.current &&
  //         !ref.current.contains(e.target) &&
  //         e.target.tagName !== "svg" &&
  //         e.target.tagName !== "path"
  //       ) {
  //         handler();
  //       }
  //     }

  //     document.addEventListener("click", handleClick, listenCapturing);

  //     return () => document.removeEventListener("click", handleClick);
  //   },
  //   [handler, listenCapturing]
  // );

  return ref;
}
