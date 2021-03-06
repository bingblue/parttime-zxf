﻿/**
 * jQuery :  城市联动插件
 * @author   XiaoDong <cssrain@gmail.com>
 *			 http://www.cssrain.cn
 * @example  $("#test").ProvinceCity();
 * @params   暂无
 */
var getProvinceById = function (id) {
	console.log(id)
	var name = '';
	$.each( citydatalist , function(index,data){
		if (data.id == id) {
			name = data.name;
			return false
		}
	});
	return name;
}
$.fn.setCity = function() {
	var province = $(this).attr('province')
	var city1 = $(this).attr('city')
	var area = $(this).attr('area')
	var _self = this;
	var src = ''
	$.each( citydatalist , function(index,data){
		if (data.code == province) {
			src = data.name + '/'
			$.each( data.cities, function(n, t) {
				if (t.code == city1) {
					src = src + t.name + '/'
					$.each( t.cities, function(i, a) {
						if (a.code == area) {
							src = src + a.name
						}
					})
				}
			})
		}
	});
	_self.html(src)
}
$.fn.ProvinceCity = function(name){
	var province = $(this).attr('province')
	var city1 = $(this).attr('city')
	var area = $(this).attr('area')
	
	var _self = this;
	//定义3个默认值
	_self.data("province",['请选择', '请选择']);
	_self.data("city1",['请选择', '请选择']);
	_self.data("city2",["请选择", '请选择']);
	//插入3个空的下拉框
	_self.append("<select class='form-control' name='province_id_"+name+"'></select>/&nbsp;&nbsp;");
	_self.append("<select class='form-control' name='city_id_"+name+"'></select>/&nbsp;&nbsp;");
	_self.append("<select class='form-control' name='area_id_"+name+"'></select>");
	//分别获取3个下拉框
	var $sel1 = _self.find("select").eq(0);
	var $sel2 = _self.find("select").eq(1);
	var $sel3 = _self.find("select").eq(2);
	//默认省级下拉
	if(_self.data("province")){
		$sel1.append("<option value='"+_self.data("province")[1]+"'>"+_self.data("province")[0]+"</option>");
	}
	$.each( citydatalist , function(index,data){
		if (data.code == province) {
			$sel1.append("<option value='"+data.code+"' selected='selected'>"+data.name+"</option>");
		} else {
			$sel1.append("<option value='"+data.code+"'>"+data.name+"</option>");
		}
		
	});
	//默认的1级城市下拉
	if(_self.data("city1")){
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
		$sel3[0].options.length=0;
		index1 = this.selectedIndex;
		console.log(index1)
		if(index1==0){	//当选择的为 “请选择” 时
			if(_self.data("city1")){
				$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
			}
			if(_self.data("city2")){
				$sel3.append("<option value='"+_self.data("city2")[1]+"'>"+_self.data("city2")[0]+"</option>");
			}
		}else{
			$.each( citydatalist[index1-1].cities , function(index,data){
				if (data.code === city1) {
					$sel2.append("<option value='"+data.code+"' selected='selected'>"+data.name+"</option>");
				} else {
					$sel2.append("<option value='"+data.code+"'>"+data.name+"</option>");
				}
			});
			$.each( citydatalist[index1-1].cities[0].cities , function(index,data){
				if (data.code === area) {
					$sel3.append("<option value='"+data.code+"' selected='selected'>"+data.name+"</option>");
				} else {
					$sel3.append("<option value='"+data.code+"'>"+data.name+"</option>");
				}
			})
		}
	}).change();
	var index2 = "" ;
	$sel2.change(function(){
		$sel3[0].options.length=0;
		index2 = this.selectedIndex;
		$.each( citydatalist[index1-1].cities[index2].cities , function(index,data){
			$sel3.append("<option value='"+data.code+"'>"+data.name+"</option>");
		})
	});
	return _self;
};