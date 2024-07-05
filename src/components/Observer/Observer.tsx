import { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "components/Observer/Observer.module.scss";

export default function Observer({ children, className }: { children: JSX.Element; className?: string }) {
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && myRef.current) {
                    myRef.current.classList.add(styles.active);
                    return;
                }
            });
        });
        myRef.current && observer.observe(myRef.current);
    }, []);

    return (
        <div className={styles.root}>
            <div ref={myRef} className={className}>
                {children}
            </div>
        </div>
    );
}
