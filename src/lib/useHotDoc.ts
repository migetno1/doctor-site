import { useEffect } from "react";

const SRC = "https://cdn.hotdoc.com.au/static/assets/js/hotdoc-widgets.min.js";

/** Injects the HotDoc widgets script once so lightbox booking buttons work. */
export function useHotDoc() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.charset = "utf-8";
    document.body.appendChild(s);
  }, []);
}
