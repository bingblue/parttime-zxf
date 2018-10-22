﻿/**
 * jQuery :  城市联动插件
 * @author   XiaoDong <cssrain@gmail.com>
 *			 http://www.cssrain.cn
 * @example  $("#test").ProvinceCity();
 * @params   暂无
 */
$.fn.ProvinceCity = function(){
	var province = $(this).attr('province')
	var city1 = $(this).attr('city')
	var _self = this;
	//定义3个默认值
	_self.data("province",['请选择', province]);
	_self.data("city1",['请选择', city1]);
	//插入3个空的下拉框
	_self.append('<label class="col-lg-1  control-label" style="min-width: 100px;">设置辖区</label>')
	_self.append("<div class='col-lg-4'><select class='form-control'></select></div>");
	_self.append("<div class='col-lg-4'><select class='form-control'></select></div>");
	_self.append('<div class="col-lg-1"><a href="javascript:void(0);" class="btn btn-warning jq-delete-xiaqu">删除</a></div>')
	//分别获取3个下拉框
	var $sel1 = _self.find("select").eq(0);
	var $sel2 = _self.find("select").eq(1);
	var $sel3 = _self.find("select").eq(2);
	//默认省级下拉
	if(_self.data("province")){
		$sel1.append("<option value='"+_self.data("province")[1]+"'>"+_self.data("province")[0]+"</option>");
	}
	$.each( GP , function(index,data){
		if (data === province) {
			$sel1.append("<option value='"+data+"' selected='selected'>"+data+"</option>");
		} else {
			$sel1.append("<option value='"+data+"'>"+data+"</option>");
		}
		
	});
	//默认的1级城市下拉
	if(_self.data("city1")){
		// if (data === province) {
		// 	$sel1.append("<option value='"+data+"' selected='selected'>"+data+"</option>");
		// } else {
		// 	$sel1.append("<option value='"+data+"'>"+data+"</option>");
		// }
		$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
	}
	//默认的2级城市下拉
	if(_self.data("city2")){
		$sel3.append("<option value='"+_self.data("city2")[1]+"'>"+_self.data("city2")[0]+"</option>");
	}
	//省级联动 控制
	var index1 = "" ;
	$sel1.change(function(){
		//清空其它2个下拉框
		$sel2[0].options.length=0;
		index1 = this.selectedIndex;
		index2 = 0;
		if(index1==0){	//当选择的为 “请选择” 时
			if(_self.data("city1")){
				$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
			}
			if(_self.data("city2")){
				$sel3.append("<option value='"+_self.data("city2")[1]+"'>"+_self.data("city2")[0]+"</option>");
			}
		}else{
			$.each( GT[index1-1] , function(index,data){
				if (data === city1) {
					index2 = index;
					$sel2.append("<option value='"+data+"' selected='selected'>"+data+"</option>");
				} else {
					$sel2.append("<option value='"+data+"'>"+data+"</option>");
				}
			});
			// $.each( GC[index1-1][index2] , function(index,data){
			// 	if (data === city2) {
			// 		$sel3.append("<option value='"+data+"' selected='selected'>"+data+"</option>");
			// 	} else {
			// 		$sel3.append("<option value='"+data+"'>"+data+"</option>");
			// 	}
			// })
		}
	}).change();
	//1级城市联动 控制
	var index2 = "" ;
	$sel2.change(function(){
		// $sel3[0].options.length=0;
		// index2 = this.selectedIndex;
		// $.each( GC[index1-1][index2] , function(index,data){
		// 	$sel3.append("<option value='"+data+"'>"+data+"</option>");
		// })
	});
	return _self;
};