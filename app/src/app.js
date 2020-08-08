import Header from '../src/materials/components/header/header.js';
import Slider from '../src/materials/components/slider/slider.js';

export default class App {
	constructor() {
		new Header();
		new Slider();
	}
}

new App();
