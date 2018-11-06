$(function(){
  // 教师列表 停用账号
  // 教师列表 查看班级
  // 教师列表 重置密码
  $('.jq-pwd').click(function(){
    swal({
      title: "确认重置教师【教师名】的账户密码吗？",
      text: "（默认密码：zxf888888）",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认重置",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
})
