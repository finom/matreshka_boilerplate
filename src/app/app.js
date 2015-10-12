import MK from 'matreshka';
import Todos from 'app/todos.class';
import RandomCat from 'app/random-cat.class';

window.app = new class Main extends MK {
	constructor() {
		super()
			.bindNode('sandbox', '#app')
			.setClassFor({
				todos: Todos,
				randomCat: RandomCat
			});
	}
}
