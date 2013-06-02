/*
 * Angular-Sizzle
 *
 * Get the jQuery-Selector-Engine without
 * the jQuery-Overload.
 *
 * https://github.com/herschel666/angular-sizzle
**/

(function (angular, Sizzle, elem, _elem, undefined) {

	'use strict';

	angular
		.module('ek.Sizzle', [])
		.run(function () {

			/*
			 * Save reference to the angular-element-method.
			**/
			angular[_elem] = angular[elem];

			/*
			 * Overwrite the angular-element-method and introduce Sizzle.
			**/
			angular[elem] = function (slctr) {
				return slctr instanceof angular[_elem] && slctr || angular[_elem](Sizzle(slctr));
			};

		});

})(angular, Sizzle, 'element', '_element');