// JavaScript Document
// Context
var Context =function (ctx){
	this.context = ctx;
	// 清除屏幕背景
	this.fillBgRect = function(screenWidth,screenHeight){
		this.context.fillStyle="#FFF";
		this.context.fillRect(0,0,screenWidth,screenHeight);	
	}
	
	// 画物体对象
	this.drawImage = function(obj){
		this.context.drawImage(obj.image, obj.x, obj.y); 	
	}
}

// 物体对象
var	GameObject = function(){
	this.x = 0; //x坐标
	this.y = 0; //y坐标
	this.image = null;
}

// 汽车对象
var CarRoom = function(){}; 
// 继承公用物体对象
CarRoom.prototype = new GameObject();
// 设置边界条件 screenWidth-画布宽度;screenHeight--画布高度
CarRoom.prototype.checkborder = function(screenWidth,screenHeight){
	if(this.x<0) this.x=0;
	if(this.x>(screenWidth-this.image.width)) this.x = screenWidth-this.image.width;
	if(this.y>(screenHeight-this.image.height)) this.y = (screenHeight-this.image.height);
	if(this.y<0) this.y = 0;
}


// 障碍物对象
var BlockRoom = function(){};
BlockRoom.prototype = new GameObject();



/*
* 判断两个物体是否碰撞
* 只判断上下碰撞
* obj1 下面的物体
* obj2 上面的物体
* overlap 可以允许重叠的量
* 碰撞返回true
*/
var CheckIntersect = function(obj1,obj2,overlap){
	Ax = obj1.x+overlap;
	Ay = obj1.y+overlap;
	Bx = obj1.x +obj1.image.width-overlap;
	By = obj1.y+overlap;
	
	Cx = obj2.x+overlap;
	Cy = obj2.y+obj2.image.height-overlap;
	Dx = obj2.x+obj2.image.width-overlap;
	Dy = obj2.y+obj2.image.height-overlap;
	
	if(Ay<=Cy && (Cy-Ay)<=obj2.image.height) {
		if(Cx<=Bx&&Dx>=Ax ) {
			return true;	
		}
	}
	return false;
}