import classNames from "classnames";
import globalStyles from "styles/Globals.module.scss";
import styles from "components/Logo/Logo.module.scss";
import { images } from "assets";
import { LogoProps } from "components/Logo/Logo.props";

export default function Logo({ color }: LogoProps) {
    return (
        <div className={classNames(styles.root, globalStyles.title5)}>
            <img src={images.logo} alt="" width="37px" height="24px" />
            <span style={{ color: color }}>testLab</span>
        </div>
    );
}
