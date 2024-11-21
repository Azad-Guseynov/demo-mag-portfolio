import styles from './Categories.module.scss';

export default function Categories() {
  return (
    <div className={styles.container}>
      <h3>Категории</h3>
      <div className={styles.categories}>
        <div className={styles.cart}>
          <img src='./public/image/Categories/01.png' alt='' />
          <p>Куртки</p>
        </div>
        <div className={styles.cart}>
          <img src='./public/image/Categories/02.png' alt='' />
          <p>Пальто</p>
        </div>
        <div className={styles.cart}>
          <img src='./public/image/Categories/03.png' alt='' />
          <p>Шубы</p>
        </div>
        <div className={styles.cart}>
          <img src='./public/image/Categories/04.png' alt='' />
          <p>Парки</p>
        </div>
      </div>
    </div>
  );
}
