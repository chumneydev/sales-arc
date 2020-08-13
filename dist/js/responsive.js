(function(global, undefined){

	function widthChanged(elem) {
		return elem.offsetWidth !== parseInt(elem.dataset.width);
	}

	function inRange(width, range) {
		let min = range.minWidth || 0;
		let max = range.maxWidth || Infinity;
		return width >= min && width <= max;
	}

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	global.ElementMediaQuery = function(element, sizes) {

		if(arguments.length < 2) {
			throw('ElementMediaQuery expects 2 parameters ' + arguments.length + ' supplied.')
		}
		if(!(element instanceof Element)) {
			throw('The first argument for ElementMediaQuery must be a dom object');
		}
		if(typeof sizes !== "object") {
			throw('The second argument for ElementMediaQuery must be an object');
		}

		var $emqObj = this;
		$emqObj.element = element;
		$emqObj.sizes = sizes;

		element.dataset.width = element.offsetWidth;
		$emqObj.updateSize();

		var onWidthChange = new Event('onWidthChange');

		window.onresize = function(event) {
			if(widthChanged(element)) { 
				element.dataset.width = element.offsetWidth;
			}
		};
		var observer = new MutationObserver(function(mutations) {
		  	mutations.forEach(function(mutation) {
		  		if(widthChanged(element)) element.dataset.width = element.offsetWidth;
			    if(mutation.type === 'attributes' && mutation.attributeName === 'data-width') {		
			    	$emqObj.updateSize() 	
			    	element.dispatchEvent(onWidthChange);				    	
			    }
		 	});    
		});
		 			 
		observer.observe(element, { attributes: true, childList: true, characterData: true, subtree: true });

	}

	ElementMediaQuery.prototype.updateSize = function() {
		var range_flag = 0;
    	for (var size in this.sizes) {
			if(inRange(this.element.offsetWidth, this.sizes[size])) {
				this.element.dataset.size = size;
				range_flag = 1;
			}
		}
		if(!range_flag) this.element.dataset.size = '';
	}

	var allElements = document.querySelectorAll('[data-sizes]');

	for (var element of allElements) {
		new ElementMediaQuery(element, JSON.parse(element.dataset.sizes));
	}

})(this);