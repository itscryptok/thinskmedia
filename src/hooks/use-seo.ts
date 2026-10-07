import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function useSeo({ title, description, canonical, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (attr === "name") el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "");
        if (attr === "property") el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "");
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', "property", ogImage);
      setMeta('meta[name="twitter:image"]', "name", ogImage);
    }
  }, [title, description, canonical, ogImage]);
}
