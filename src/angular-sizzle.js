/*!
 * Angular-Sizzle
**/

(function (angular, sizzle, elem, _elem) {

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
				return slctr instanceof angular[_elem] && slctr || angular[_elem](sizzle(slctr));
			};

		});

})(angular, Sizzle, 'element', '_element');