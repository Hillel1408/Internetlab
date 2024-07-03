import { useState } from "react";
import classNames from "classnames";
import scrollLock from "scroll-lock";
import { Logo } from "components";
import globalStyles from "styles/Globals.module.scss";
import styles from "components/Header/Header.module.scss";
import { images } from "assets";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const navList = [
        { text: "Как это работает", href: "#howItWorks" },
        { text: "3-й блок", href: "#block3" },
        { text: "Вопросы и ответы", href: "#faq" },
        { text: "Форма", href: "#form" },
    ];

    return (
        <header className={classNames(globalStyles.container, styles.root)}>
            <Logo color="white" />
            <nav className={classNames(activeMenu && styles.active)}>
                <div className={styles.mobileMenuHead}>
                    <Logo color="#191C1F" />
                    <button
                        onClick={() => {
                            setActiveMenu((prev) => !prev);
                            scrollLock.enablePageScroll();
                        }}
                    >
                        <img src={images.close} alt="" width="" height="" />
                    </button>
                </div>
                <ul className={styles.navList}>
                    {navList.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setActiveMenu((prev) => !prev);
                                scrollLock.enablePageScroll();
                            }}
                        >
                            <a href={item.href} className={globalStyles.text16}>
                                {item.text}
                                <img src={images.vector} alt="" width="" height="" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className={styles.openMenuBtn}
                onClick={() => {
                    setActiveMenu((prev) => !prev);
                    scrollLock.disablePageScroll();
                }}
            >
                <img src={images.menu} alt="" width="" height="" />
            </button>
        </header>
    );
}
