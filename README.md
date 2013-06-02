# Angular-Sizzle

Angular.js internally uses jqLite for working with the DOM, a micro-library similar to jQuery but much smaller. As Angular has its own AJAX-implementation and provides animations (version >= 1.1.3), there's actually no real need for jQuery.

Only when it comes to selecting DOM-elements, using just jqLite can become quite a hassle. That's the point where Angular-Sizzle comes into play. It provides the powerful selector-capability of jQuery without the huge AJAX- and animation-overload.

To demonstrate the difference:

Sizzle 1.9.4 (~18 kb) **vs** jQuery 1.10.0 (~92 kb)

## How to use?

First of all include Angular.js, Sizzle.js and Angular-Sizzle.js. Then, when instatiating your app, include 'ek.Sizzle' as a dependency.

	<script src="path/to/angular.js"></script>
	<script src="path/to/sizzle.js"></script>
	<script src="path/to/angular-sizzle.js"></script>
	<script>
		var app = angular.module('tehApp', ['ek.Sizzle']);
	</script>

That's it!

## What happens?

Angular-Sizzle saves a reference to the `angular.element`-method and overwrites it with a custom function, that takes a selector-string and passes a Sizzle-instance to the actual `angular.element`-method.

## What else?

Due to the concept of Angular, heavy DOM-lifting stuff is done by directives, which provide element-, class- and attribute-selectors in a rather abstract way. Inside of these directives one has access to an `angular.element`-instance of the relevant DOM-element to work with.

So check, if you really need a full-grown selector-engine. Maybe the use of directives and the `angular.element`-DOM-traversing-method suffices your needs.

## Who wrote this one-liner?

Well, me. And as chance would have it, I have a twitter and a blog. Funny, hein?!

[@Herschel_R](http://twitter.com/Herschel_R)<br>
[EK-Blog](http://www.emanuel-kluge.de/)

## Could you bore me with license stuff?

No problem!

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>