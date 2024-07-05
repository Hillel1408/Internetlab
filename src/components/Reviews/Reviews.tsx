import { useRef } from "react";
import classNames from "classnames";
import { Observer } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Pagination } from "swiper/modules";
import styles from "components/Reviews/Reviews.module.scss";
import globalStyles from "styles/Globals.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { images } from "assets";

export default function Reviews() {
    const swiperRef = useRef<SwiperCore>();

    const reviews = [
        {
            name: "Константинов Михаил Павлович",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
            city: "Санкт-Петербург",
            photo: "",
        },
        {
            name: "Иван Иванов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
            city: "Санкт-Петербург",
            photo: "",
        },
        {
            name: "Артем Корнилов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
            city: "Санкт-Петербург",
            photo: "",
        },
        {
            name: "Константинов Михаил Павлович",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
            city: "Санкт-Петербург",
            photo: "",
        },
        {
            name: "Иван Иванов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
            city: "Санкт-Петербург",
            photo: "",
        },
        {
            name: "Артем Корнилов",
            text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
            city: "Санкт-Петербург",
            photo: "",
        },
    ];

    return (
        <div className={styles.root}>
            <div className={globalStyles.container}>
                <Observer>
                    <h2 className={classNames(globalStyles.title2, styles.title)}>Отзывы</h2>
                </Observer>
                <div className={styles.sliderWrapper}>
                    <Swiper
                        onBeforeInit={(swiper: SwiperCore) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={1}
                        loop
                        spaceBetween={32}
                        className={styles.slider}
                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.slide}>
                                    <div>
                                        {!item.photo && <img src={images.unnamed} alt="" width="44px" height="44px" />}
                                        <div className={styles.slideHead}>
                                            <span className={globalStyles.text16}>{item.name}</span>
                                            <p className={globalStyles.text12}>{item.city}</p>
                                        </div>
                                    </div>
                                    <p className={globalStyles.text14}>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button onClick={() => swiperRef.current?.slidePrev()} className={classNames(styles.sliderButton, styles.sliderButtonPrev)}>
                        <svg width="16" height="32" viewBox="0 0 16 32">
                            <path
                                d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
                                fill="#C2C8CD"
                            />
                        </svg>
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()} className={classNames(styles.sliderButton, styles.sliderButtonNext)}>
                        <svg width="16" height="32" viewBox="0 0 16 32">
                            <path
                                d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
                                fill="#C2C8CD"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
