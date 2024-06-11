import { useEffect, useState } from 'react';

const useIntersectionObserver = ({ threshold = 0.1, root = null, rootMargin = '0%' }) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        } else {
          entry.target.classList.remove('section-visible');
        }
      },
      { threshold, root, rootMargin }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [node, threshold, root, rootMargin]);

  return [setNode, entry];
};

export default useIntersectionObserver;
