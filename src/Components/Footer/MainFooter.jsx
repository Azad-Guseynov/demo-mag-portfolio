import styles from './MainFooter.module.scss';
export default function MainFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <a href='/'>Abaut us</a>
        <a href='/'>Contacts</a>
      </div>
      <div className={styles.poleznoe}>
        <a href=''>Оплата и доставка</a>
        <a href=''>Условия возврата</a>
        <a href=''>Бонусная система</a>
      </div>
      <div className={styles.clients}>
        <a href=''>Избранное</a>
        <a href=''>Публичная оферта</a>
        <a href=''>Политика конфиденциальности</a>
      </div>
      <div className={styles.links}>
        <div className={styles.web}>
          <a className={styles.ig} href='/'></a>
          <a className={styles.tg} href='/'></a>
        </div>
        <div className={styles.contacts}>
          <a href=''>+38(073) 096 36 44</a>
          <a href='info@yanki.com'></a>
        </div>
      </div>
    </div>
  );
}
