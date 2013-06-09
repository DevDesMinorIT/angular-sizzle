/*!
 * Angular-Sizzle
**/

(function (angular, sizzle, elem, _elem) {

	'use strict';

	angular
		.module('ek.Sizzle', [])
		.service('ek.SizzleHelper', function () {

		})
		.run(function () {

			/*
			 * Save reference to the angular-element-method.
			**/
			angular[_elem] = angular[elem];

			/*
			 * Overwrite the angular-element-method and introduce Sizzle.
			**/
			angular[elem] = function (slctr) {

				// The passed element is already an instance of angular._element.
				if ( slctr instanceof angular[_elem] ) {
					return slctr;
				}

				// A selector-string is passed - Sizzle's turn.
				if ( typeof slctr === 'string' ) {
					return angular[_elem](sizzle(slctr));
				}

				// The passed argument is neither instance of
				// angular._element nor selector-string. Pass it to
				// the angular._element-function and let it do the
				// error-handling.
				return angular[_elem](slctr);

			};

		});

})(angular, Sizzle, 'element', '_element');