import { useRef } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import styles from "components/Reviews/Reviews.module.scss";
import globalStyles from "styles/Globals.module.scss";
import "swiper/css";

export default function Reviews() {
    const swiperRef = useRef<SwiperCore>();

    const reviews = [
        {
            name: "Константинов Михаил Павлович",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
        },
        {
            name: "Иван Иванов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
        },
        {
            name: "Артем Корнилов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
        },
        {
            name: "Константинов Михаил Павлович",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
        },
        {
            name: "Иван Иванов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
        },
        {
            name: "Артем Корнилов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
        },
    ];

    return (
        <div className={styles.root}>
            <div className={globalStyles.container}>
                <h2 className={globalStyles.title2}>Отзывы</h2>
                <Swiper
                    onBeforeInit={(swiper: SwiperCore) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={1}
                    loop
                    spaceBetween={32}
                    className={styles.slider}
                    breakpoints={{
                        551: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slide}>
                                <div>{item.name}</div>
                                <p className={globalStyles.text14}>{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
