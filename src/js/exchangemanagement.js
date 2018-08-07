$(function(){
  // 学生兑换管理 兑换
  $('.jq-edit').click(function(){
    swal({
      title: "确认将该订单标记为完成兑换吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("兑换成功", "success")
      }
    })
  })
  // 学生兑换管理 取消
  $('.jq-cancle').click(function(){
    swal({
      title: "确认取消该订单吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("兑换成功", "success")
      }
    })
  })
   // 学生兑换管理 兑换
   $('.jq-all').click(function(){
    swal({
      title: "确认批量兑换选中的订单吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("兑换成功", "success")
      }
    })
  })
  // 学生兑换管理 取消
  $('.jq-qllcancle').click(function(){
    swal({
      title: "确认批量取消选中的订单吗？",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("兑换成功", "success")
      }
    })
  })
})