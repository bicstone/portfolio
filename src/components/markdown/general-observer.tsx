// forked from https://github.com/PaulieScanlon/mdx-embed/blob/c93115daa96291f1a23f6acdf90e8897142f6b3a/packages/mdx-embed/src/components/general-observer/general-observer.tsx
// MIT License Copyright (c) 2020 Paul Scanlon

import {
  type FunctionComponent,
  useRef,
  useEffect,
  useState,
  type RefObject,
  type ReactNode,
} from "react";

interface IGeneralObserverProps {
  /** React Children */
  children: ReactNode;
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
}

export const GeneralObserver: FunctionComponent<IGeneralObserverProps> = ({
  children,
  onEnter,
  height = 0,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true);
          onEnter?.();
        }
      },
      {
        root: null,
        rootMargin: "400px",
        threshold: 0,
      }
    );
    if (ref?.current != null) {
      observer.observe(ref.current);
    }
  }, [onEnter, ref]);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      data-testid="general-observer"
      className="mdx-embed"
    >
      {isChildVisible ? children : <div style={{ height, width: "100%" }} />}
    </div>
  );
};
