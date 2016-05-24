<template>
	  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
      <input class="mdl-textfield__input" type="text" v-bind:id="id" tabIndex="-1" v-model="showField"/>
        <label class="mdl-textfield__label" v-bind:for="id">{{ label }}</label>
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu" v-bind:for="id">
          <li class="mdl-menu__item" v-for="op in options" data-val="{{op.value}}">{{op.label}}</li>
        </ul>
    </div>
</template>

<script>
	//import '../node_modules/getmdl-select/getmdl-select.min.js';
	import '../node_modules/getmdl-select/getmdl-select.min.css';
	const getmdlSelect = {
    addEventListeners (dropdown) {
      const input = dropdown.querySelector('input');
      const list = dropdown.querySelectorAll('li');

      [].forEach.call(list, (li) => {
          li.onclick = () => {
            dropdown.MaterialTextfield.change(li.textContent);
            input.dataset.val = li.dataset.val || '';
           	getmdlSelect.selectedValue = li.dataset.val || '';
            if ("createEvent" in document) {
              let evt = document.createEvent("HTMLEvents");
              evt.initEvent("change", false, true);
              input.dispatchEvent(evt);
            } else {
              input.fireEvent("onchange");
            }
          }
      });
    },
    selectedValue: null,
    init (selector) {
      const dropdowns = [selector];
      [].forEach.call(dropdowns,  (i) => {
          getmdlSelect.addEventListeners(i);
          i.style.width = i.querySelector('.mdl-menu').clientWidth + 'px';
      });
    }
	};

	export default {
		props: {
			id: {
				type: String,
				default: 'zinput'
			},
			label: {
				type: String,
				default: ''
			},
			options: {
				type: Array,
				default () {
					return [];
				}
			},
			selected: {
				required: true,
				twoWay: true
			}
		},
		data () {
			return {
				showField: ''
			}
		},
		watch: { 
			options () {
				getmdlSelect.init(this.$el);
			},
			showField () {
				this.selected  = getmdlSelect.selectedValue;
			}
		},
		ready () {
			componentHandler.upgradeDom();
			getmdlSelect.init(this.$el);
		}
	}
</script>