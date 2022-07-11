import CategoriesComponent from '../../Components/CategoriesComponent/CategoriesComponent';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import './HomepageStyle.scss';

type Props = {};

const Homepage = (props: Props) => {
	return (
		<>
			<HeaderComponent />
			<div className='CategoriesDisplay'>
				<CategoriesComponent value='shirt' />
				<CategoriesComponent value='phone' />
				<CategoriesComponent value='shoes' />
				<CategoriesComponent value='shirt' />
			</div>
			<h2>Our Products</h2>
			<div className='ProductDisplay'>
				<ProductComponent imageLink='./images/shirt.png' />
				<ProductComponent imageLink='./images/airpods.png' />
				<ProductComponent imageLink='./images/shoes2.png' />
				<ProductComponent imageLink='./images/watch.png' />
			</div>
		</>
	);
};

export default Homepage;
