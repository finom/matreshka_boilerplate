import MK from 'matreshka';

export default class Cat extends MK {
	constructor(data, app) {
		super(data)
			.bindNode('sandbox', app.$('.cat-sandbox'))
			.bindNode('cat', ':sandbox .cat', MK.binders.prop('src'))
			.on('click::(.reload)', evt =>
				this.cat = `http://thecatapi.com/api/images/get?format=src&type=gif&rand=${Math.random()}`,
			// true means tun handler immediatelly after event initialization
			true);
	}
}
