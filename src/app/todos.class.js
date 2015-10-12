import MK from 'matreshka';

export default class Todos extends MK.Array {
	itemRenderer = `<li>{{label}}</li>`;
	constructor(data, app) {
		super()
			.bindNode({
				sandbox: app.$('.todos-sandbox'),
				container: ':sandbox .todos',
                newTodo: ':sandbox .new-todo'
			})
			.on('submit::sandbox', evt => {
                evt.preventDefault();
                if(this.newTodo) {
                    this.push({
				        checked: false,
				        label: this.newTodo
                    });

                    this.newTodo = '';
			    }
            })

	}
}
