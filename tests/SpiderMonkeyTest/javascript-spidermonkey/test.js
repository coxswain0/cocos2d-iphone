// http://www.cocos2d-iphone.org
//
// Javascript Action tests
// Test are coded using Javascript, with the exception of MenuCallback which uses Objective-J to handle the callbacks.
// 


Float32Array.prototype.x = function () {
	return this[0];
};

Float32Array.prototype.y = function () {
	return this[1];
};

function ccp(x, y)
{
	var floats = new Float32Array(2);
	floats[0] = x;
	floats[1] = y;
	
	return floats;
}

cc.log('Hello World');

a = new cc.Node();
a.init();

var value = 90
a.setRotation( 90 )
var ret = a.rotation()
if (value != ret ) {
	cc.log('Error in setRotation / rotation');
}

value = 5;
a.setScaleX( 5 );
ret = a.scaleX();
if (value != ret) {
	cc.log('Error in setScaleX / scaleX ');
}


//a.setPosition( ccp(100,200) );
//
//p = a.getPosition();
//cc.log('position is: ' + p[0] + ', ' + p[1] )

a.onEnter = function() {
	cc.log("On Enter called");
}


cc.addToRunningScene( a );
