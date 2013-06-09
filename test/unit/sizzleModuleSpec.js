angular.bootstrap(document.documentElement, ['ng', 'ek.Sizzle']);

describe('ek.Sizzle', function () {

	var elem;

	// inserting some DOM
	beforeEach(function () {

		elem = document.createElement('div');

		elem.innerHTML = [
			'<ul id="the-list" class="the-mighty-list">',
			'	<li class="list-item">Foo</li>',
			'	<li class="list-item">Bar</li>',
			'	<li class="list-item">Hodor</li>',
			'</ul>',
			'<input type="text" value="Lorem ipsum">',
			'<input type="submit">'
		].join('');

		document.body.appendChild(elem);

	});

	it('should have Sizzle', function () {
		expect(Sizzle).toBeDefined();
	});

	it('should have method "_element"', function () {
		expect(angular._element).toBeDefined();
	});

	it('should have method "element" as well', function () {
		expect(angular.element).toBeDefined();
	});

	it('should work the old way', function () {
		expect(angular.element(document.getElementsByTagName('li')).length).toEqual(3);
	});

	it('should handle jqLite-objects', function () {
		var $$lis = angular.element(angular.element(document.getElementsByTagName('li')));
		expect($$lis.length).toEqual(3);
		expect($$lis.find).toBeDefined();
	});

	it('should do the crazy Sizzle-stuff', function () {
		expect(angular.element('#the-list')[0].tagName.toLowerCase()).toBe('ul');
		expect(angular.element('.list-item').length).toEqual(3);
		expect(angular.element('input').length).toEqual(2);
		expect(angular.element('input:text').attr('value')).toBe('Lorem ipsum');
	});

	// cleaning the DOM
	afterEach(function () {
		elem.parentNode.removeChild(elem);
	});

});