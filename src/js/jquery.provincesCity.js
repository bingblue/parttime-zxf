/**
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
$.fn.ProvinceCity = function(){
	var province = $(this).attr('province')
	var city1 = $(this).attr('city')
	var _self = this;
	//定义3个默认值
	_self.data("province",['请选择', '请选择']);
	_self.data("city1",['请选择', '请选择']);
	//插入3个空的下拉框
	_self.append('<label class="col-lg-1  control-label" style="min-width: 100px;">设置辖区</label>')
	_self.append("<div class='col-lg-4'><select class='form-control'></select></div>");
	_self.append("<div class='col-lg-4'><select class='form-control'></select></div>");
	_self.append('<div class="col-lg-1"><a href="javascript:void(0);" class="btn btn-warning jq-delete-xiaqu">删除</a></div>')
	//分别获取3个下拉框
	var $sel1 = _self.find("select").eq(0);
	var $sel2 = _self.find("select").eq(1);
	//默认省级下拉
	if(_self.data("province")){
		$sel1.append("<option value='"+_self.data("province")[1]+"'>"+_self.data("province")[0]+"</option>");
	}
	$.each( citydatalist , function(index,data){
		if (data.id == province) {
			$sel1.append("<option value='"+data.id+"' selected='selected'>"+data.name+"</option>");
		} else {
			$sel1.append("<option value='"+data.id+"'>"+data.name+"</option>");
		}
		
	});
	//默认的1级城市下拉
	if(_self.data("city1")){
		$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
	}
	//省级联动 控制
	var index1 = "" ;
	$sel1.change(function(){
		//清空其它2个下拉框
		$sel2[0].options.length=0;
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
			$.each( citydatalist[index1-1].cityList , function(index,data){
				if (data.id === city1) {
					$sel2.append("<option value='"+data.id+"' selected='selected'>"+data.name+"</option>");
				} else {
					$sel2.append("<option value='"+data.id+"'>"+data.name+"</option>");
				}
			});
		}
	}).change();
	return _self;
};