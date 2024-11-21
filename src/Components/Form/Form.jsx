import styles from './Form.module.scss';

export default function Form() {
  return (
    <div className={styles.container}>
      <p>Узнайте первым о новинках</p>
      <input type='text' placeholder='Ваш e-mail*' />
      <button>ПОДПИСАТЬСЯ</button>
      <p className={styles.title}>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
        ознакомлен(а) с условиями конфиденциальности.
      </p>
    </div>
  );
}
