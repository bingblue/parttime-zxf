$(function(){
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
})
