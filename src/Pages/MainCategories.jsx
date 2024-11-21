import styles from './MainCategories.module.scss';
import HeaderInfo from './HeadeInfo/HeaderInfo.jsx';
import catMain from './categories.json';

export default function MainCategories() {
  const catItem = [
    { name: 'NEW' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
    { name: 'Bestsellers' },
  ];
  return (
    <div className={styles.container}>
      <HeaderInfo />
      <div className={styles.main}>
        <div className={styles.sort}>
          <button>Size</button>
          <button>Color</button>
          <button>Price</button>
          <button>Sort</button>
        </div>

        <div className={styles.carts}>
          {catMain.map((props) => (
            <div key={props.id} className={styles.cart}>
              <img src={props.imageUrl} alt='' />
              <p className={styles.cartName}>{props.title}</p>
              <p>{props.price}</p>
              <div className={styles.buttons}>
                <button>xxs</button>
                <button>xs</button>
                <button>s</button>
                <button>m</button>
                <button>l</button>
              </div>
              <button className={styles.buyButton}>BUY</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
