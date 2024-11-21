import Categories from '../Components/Categories/Categories';
import Form from '../Components/Form/Form';
import MainFooter from '../Components/Footer/MainFooter';
import Header from '../Components/Header/Header';

export default function Root() {
  return (
    <>
      <Header />
      <Categories />
      <Form />
      <MainFooter />
    </>
  );
}
