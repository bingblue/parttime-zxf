$(function(){
  // 学生列表 修改资料
  $(".jq-edit").click(function(){
    swal({
      title: "",
      text: text(),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认修改",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if(!$('#editStudent').parsley().validate()) return false
        swal("修改成功", "success")
    })
    setTimeout(function(){
      $('.datetimepicker').datetimepicker({
        icons: {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-chevron-up',
          down: 'fa fa-chevron-down',
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right',
          today: 'fa fa-crosshairs',
          clear: 'fa fa-trash'
        },
        format: 'YYYY-MM-DD'
      })
    }, 50)
  })
  $('.datetimepicker').datetimepicker({
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-crosshairs',
      clear: 'fa fa-trash'
    },
    format: 'YYYY-MM-DD'
  })
  // 学生管理 调换老师
  $('.jq-exchangeteacher').click(function(){
    swal({
      title: "调换老师",
      text: changeteacher(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认调换",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
  // 学生管理 调换班级
  $('.jq-exchangeclass').click(function(){
    swal({
      title: "调换班级",
      text: changeclass(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认调换",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
  // 学生列表 改绑手机
  $('.jq-phone').click(function(){
    swal({
      title: "输入新手机",
      text: phone(),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认修改",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      const testmb = /^1\d{10}$/
      const mobile1 = $('.jq-mobile1').val()
      const mobile2 = $('.jq-mobile2').val()
      if (isConfirm) {
        if(!(testmb.test(mobile1) || testmb.test(mobile2))){
          swal.showInputError("请输入正确的手机号码")
          return false
        } else {
          swal("修改成功", "success")
        }
      } else{
        swal.showInputError("修改失败")
        return false
      }
    })
  })
  // 学生列表 重置密码
  $('.jq-pswd').click(function(){
    swal({
      title: "确认重置学生 【学生名】【学生手机号】的密码吗",
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
  // 学生管理 分配学校
  $('.jq-changeschool').click(function(){
    swal({
      title: "分配学校",
      text: changeschool(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认分配",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
  // 学生管理 调换学校
  $('.jq-exchangeschool').click(function(){
    swal({
      title: "调换学校",
      text: changeschool(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认调换",
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


