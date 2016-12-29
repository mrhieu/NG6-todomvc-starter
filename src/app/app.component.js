import './app.less';
import Masonry from 'masonry-layout';

export class TodoAppController {
  /**
   * @param {TodoList} todoList
   */
  constructor(todoList, $http) {
    "ngInject";

    console.log(document.getElementById('app-title'));
    var msnry = new Masonry( '.grid', {
    });


    this.todos = todoList;
    this.photos = [
      {
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      },{
        imgUrl: 'https://dl.dropboxusercontent.com/u/15733222/img.png'
      }
    ];
  }

  onSave(task) {
    if (!task) return;

    this.todos.add(task);
  }

  onFilter(state) {
    switch (state) {
      case 'all':
        this.todos.showAll();
        break;
      case 'active':
        this.todos.showActive();
        break;
      case 'completed':
        this.todos.showCompleted();
        break;
    }
  }

  onToggleAll() {
    this.todos.toggleAll();
  }
}

export default {
  template: `
    <h1 id="app-title">This is Todo app</h1>
    <section class="grid">
      <div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div><div class="grid-item">
        <div class="grid-item-content"></div>
      </div>
    </section>
    <section class="todoapp">
      <section class="main">
        <div masonry class="mas-container">
          <div class="masonry-brick" ng-repeat="photo in vm.photos track by $index">
              <img ng-src="{{ photo.imgUrl }}" alt="A masonry brick" width="36">
          </div>
        </div>
      </section>
      <todo-footer ng-if="$ctrl.todos.hasTasks()" todos="$ctrl.todos">
        <todo-list-filter on-filter="$ctrl.onFilter(state)" filter-state="$ctrl.todos.filterState"></todo-list-filter>
      </todo-footer>
    </section>
  `,
  controller: TodoAppController,
  controllerAs: 'vm'
};
