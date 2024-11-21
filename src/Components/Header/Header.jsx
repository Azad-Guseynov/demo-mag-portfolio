import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <img src='./public/image/YANKI.svg' alt='' />
      <div className={styles.links}>
        <div className={styles.button}></div>
        <a href='/'>NEW</a>

        {/* <Link href='./MainCategories'>Catalog</Link> */}
        <a href='./MainCategories'>Catalog</a>
        <a href='/'>About us</a>
      </div>
      <div className={styles.main}>
        <button className={styles.val}>RU</button>
        <button className={styles.val}>UAH</button>
        <div className={styles.buttons}>
          <button className={styles.buttonSertch}>
            <img src='./public/image/icons/GroupSertch.svg' alt='' />
          </button>
          <button>
            <img src='./public/image/icons/acaunt.svg ' alt='' />
          </button>
          <button>
            <img src='./public/image/icons/Like.svg' alt='' />
          </button>
          <button>
            <img src='./public/image/icons/sale.svg' alt='' />
          </button>
        </div>
      </div>
      <div className={styles.title}>
        <h2>Новая коллекция</h2>
        <p></p>
        <button>Смотреть Новинки</button>
      </div>
    </div>
  );
}
