import $ from 'jquery/dist/jquery';
import slick from 'slick-carousel/slick/slick';

class Slider {
	constructor() {

		console.log('Slider');

		$('[data-component="slider"]').slick({
			slidesToShow: 2,
			infinite: false
		});
	}
}

export default Slider;
