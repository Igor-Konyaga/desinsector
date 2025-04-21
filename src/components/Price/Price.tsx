import { FormCalc } from './FromCalc/FormCalc';
import styles from './Price.module.scss';

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
