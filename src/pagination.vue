<style lang="less">
	.pagination {
		display: flex;
		width: 100%;
		list-style: none;
		padding: 0;

		> li {
			cursor: pointer;
			text-align: center;
			margin-left: -1px;
			min-width: 30px;
		}

		.active {
			background-color: rgba(158,158,158, 0.20);
		}
	}
</style>
<template>
	<ul class="pagination" v-show="showPagination">
		<li class="mdl-button mdl-js-button mdl-js-ripple-effect"><a @click="change(1)">&lt;&lt;</a></li>
		<li class="mdl-button mdl-js-button mdl-js-ripple-effect"><a @click="prev">&lt;</a></li>
		<li v-for="i in showCount" @click="change(i)"
			v-bind:class="[currentPage ===   i ? 'active' : '']"
			class="mdl-button mdl-js-button mdl-js-ripple-effect"><a>{{ i }}</a></li>
		<li v-if="showTail" class="mdl-button mdl-js-button mdl-js-ripple-effect"><a>...</a></li>
		<li v-bind:class="[currentPage === this.lastPage ? 'active' : '']" @click="change(this.lastPage)" class="mdl-button mdl-js-button mdl-js-ripple-effect">
			<a>{{ lastPage }}</a>
		</li>
		<li @click="next" class="mdl-button mdl-js-button mdl-js-ripple-effect"><a>&gt;</a></li>
		<li @click="change(lastPage)" class="mdl-button mdl-js-button mdl-js-ripple-effect"><a>&gt;&gt;</a></li>
	</ul>
</template>
<script>
	import extend from './utils/extend.js';

	export default {
		props: {
			total: {
				type: Number,
				require: true
			},
			pageSize: {
				type: Number,
				default: 10
			},
			showCount: {
				type: Array,
				default () {
					return []
				}
			},
			changePage: {
				type: Function,
				default () {
					return function (){};
				}
			}
		},
		ready () {
			componentHandler.upgradeElement(this.$el);
			this.lastPage = Math.ceil(this.total / this.pageSize);
		},
		data () {
			return {
				currentPage: 1,
				lastPage: 1,
				showNext:true,
				showPre:false,
				showTail:false,
				showPagination:true,
			}
		},
		computed: {
			showPagination () {
				return this.lastPage == 0 ? false:true;
			},
			showNext (){
				if(this.lastPage == 1){
					return false;
				}else{
					if(this.lastPage == this.currentPage){
						return false;
					}
					return true;
				}
			},
			showCount () {
        var $this = this;
        var ar = [];

        if ($this.currentPage > 3) {
          ar.push($this.currentPage - 3);
          ar.push($this.currentPage - 2);
          ar.push($this.currentPage - 1);
        } else { 
            for (var i = 1; i < $this.currentPage; i++) {
              ar.push(i);
            }
        }

        if ($this.currentPage !== $this.lastPage) {
          ar.push($this.currentPage);
        }

        if ( $this.currentPage < ( $this.lastPage - 3 ) ) {
          ar.push($this.currentPage + 1);
          ar.push($this.currentPage + 2);
          ar.push($this.currentPage + 3);
          if ( $this.currentPage < ( $this.lastPage - 4 ) ) {
              $this.$set("showTail", true);
          }
        } else {
          $this.$set("showTail", false);
          for (var i = ($this.currentPage + 1); i < $this.lastPage; i++)
          {
              ar.push(i);
          }
        }
        return ar;
      }
		},
		watch: {
			total (val) {
				this.lastPage = Math.ceil(this.total / this.pageSize);
			},
		},
		methods: {
			prev () {
				if(this.currentPage == 1){
					this.showPre = false;
					return;
				}else{
					this.showPre = true;
				}
				this.currentPage = --this.currentPage;
				this.change(this.currentPage);

			},
			next () {
				if(this.currentPage == this.lastPage){
					this.showNext = false;
					return;
				}else{
					this.showNext = true;
				}
				this.currentPage = ++this.currentPage;
				this.change(this.currentPage);

			},
			change (page) {
				if (page === 1) {
					this.showPre = false;
				} else {
					this.showPre = true;
				}

				if (page === this.lastPage) {
					this.showNext = false;
				} else {
					this.showNext = true;
				}

				if(page < this.lastPage - 4){
					this.showTail = true;
				} else {
					this.showTail = false;
				}

				this.currentPage = page;
				this.changePage(page);
			}
		}
	}
</script>
