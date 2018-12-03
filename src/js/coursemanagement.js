$(function(){
  $('.datetimepicker').datetimepicker({
    language: "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: 'yyyy-mm-dd'
  })
  // 班级课程 删除
  $('.jq-detete').click(function(){
    let _this = this
    swal({
      title: "确定删除【班级名】的【课程名】课程吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        $(_this).parent('.panel-footer').remove()
        swal("删除成功", "success")
      }
    })
  })
  $('.jq-allupdate').click(function(){
    let _this = this
    swal({
      title: "确定批量提交吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("提交成功", "success")
      }
    })
  })
  // 学习任务 删除
  $('.jq-deleteclass').click(function(){
    let _this = this
    swal({
      title: "确定删除课程任务【课程名】吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        $(_this).parents('tr').remove()
        swal("删除成功", "success")
      }
    })
  })
  // 同步课程table切换
  // calcTableHeight()
  $(".jq-xc-table li").on('click', function () {
      var $this = $(this);
      var $name = $this.attr('name')
      if ($name) {
        if ($name === 'tbkc') {
          $('.jq-selectb').text('选择版本')
          $('.jq-selectk').text('课本')
        }
        if ($name === 'gdyf') {
          console.log($name)
          $('.jq-selectb').text('选择知识点')
          $('.jq-selectk').text('')
        }
        if ($name === 'ztcc') {
          $('.jq-selectb').text('选择考试')
          $('.jq-selectk').text('')
        }
      }
      if (!$this.hasClass('active')) {
          $this.addClass('active').siblings().removeClass('active')
      }
      // calcTableHeight()
  })
  function calcTableHeight () {
   var $maxHeight = 0;
   $('.jq-xc-table ul').each(function(index, ele) {
        if($(ele).parent().hasClass('active')){
            $maxHeight = Math.max($maxHeight, $(ele).height())
        }
   });
   $(".jq-xc-table").height($maxHeight)
  }
  // 班级课程 添加课程
  $('.jq-addclass').click(function(){
    swal({
      title: "成功添加课程",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    })
  })
  $('.jq-addTask').click(function(){
    swal({
      title: "成功添加任务",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    })
  })
  $('.jq-addStudentTask').click(function(){
    swal({
      title: "成功添加任务",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    })
  })
})

function setActive(id1, id2, id3){
  $.each($('.one'),function(i,el) {
    var $el = $(el).removeClass('active')
    if($el.data('id')==id1){
      $el.addClass('active')
    }
  })
  $.each($('.two li'),function(i,el) {
    var $el = $(el).removeClass('active')
    if($el.data('id')==id2){
      $el.addClass('active')
    }
  })
  $.each($('.three li'),function(i,el) {
    var $el = $(el).removeClass('active')
    if($el.data('id')==id3){
      $el.addClass('active')
    }
  })
}

setActive(1,13,131)
