import styles from './Price.module.scss';
import {FormCalc} from "@/app/components/Price/FromCalc/FormCalc";

export const Price = () => {
    return (
        <section id="price" className={styles.price}>
            <h2 className={styles.priceTitle}>Прайс</h2>
            <div className={styles.calculator}>
                <FormCalc/>
            </div>
        </section>
    );
};
