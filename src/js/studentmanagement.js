$(function(){
  $(".jq-edit").click(function(){
    swal({
      title: "",
      text: text(),
      html: true,
      type: "input",
      showCancelButton : true,
      confirmButtonColor : "#DD6B55",
      confirmButtonText : "确认修改",
      cancelButtonText : "取消",
      closeOnConfirm : false,
      closeOnCancel : false
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      } else {
        swal("失败", "请填完表单内容")
      }
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
  $('.jq-phone').click(function(){
    swal({
      title: "输入新手机",
      text: phone(),
      html: true,
      type: "input",
      showCancelButton : true,
      confirmButtonColor : "#DD6B55",
      confirmButtonText : "确认修改",
      cancelButtonText : "取消",
      closeOnConfirm : false,
      closeOnCancel : false
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
      } else {
        swal("失败", "请填完表单内容")
      }
    })
  })
  $('.jq-pswd').click(function(){
    swal({
      title: "确认重置学生 【学生名】【学生手机号】的密码吗",
      text: "（默认密码：zxf888888）",
      showCancelButton : true,
      confirmButtonColor : "#DD6B55",
      confirmButtonText : "确认重置",
      cancelButtonText : "取消",
      closeOnConfirm : false,
      closeOnCancel : false
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      } else {
        swal("取消")
      }
    })
  })
  // 全选
  $('.jq-allcheck').click(function(){
    let isallchecked = $('.jq-allcheck').is(':checked')
    const checkedli = $('#designerlist').find('input[type=checkbox]').length
    if(isallchecked) {
      $('#designerlist').find('input[type=checkbox]').each(function(){
        $(this).attr("checked",true)
      })
    } else {
      $('#designerlist').find('input[type=checkbox]').each(function(){
        $(this).attr("checked",false)
      })
    }
  })
  // 换班级
  $('.jq-changeclass').click(function(){
    swal({
      title: "确认调换调换班级",
      text: changeclass(),
      html: true,
      showCancelButton : true,
      confirmButtonColor : "#DD6B55",
      confirmButtonText : "确认调换",
      cancelButtonText : "取消",
      closeOnConfirm : false,
      closeOnCancel : false
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      } else {
        swal("取消")
      }
    })
  })
})

function text () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">真实姓名：</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入真实姓名" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">性别：</label>
           <div class="col-sm-6">
            <input id="id-password" placeholder="男" type="text" name="sex" required class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">出生日期：</label>
          <p class="input-group date col-sm-6 datetimepicker">
            <input type="text" class="form-control" placeholder="请选择开始时间">
            <span class="input-group-addon">
                <span class="fa fa-calendar"></span>
            </span>
          </p>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">所在地区：</label>
          <div class="col-sm-6">
            <select name="" id="label" class="form-control">
              <option value="">浙江省 / 杭州市/ 西湖区</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">所在学校：</label>
          <div class="col-sm-6">
            <input id="id-password" placeholder="请输入就读的学校" type="text" name="sex" required class="form-control">
          </div>
        </div>
        <div class="form-group">
        <label class="control-label col-sm-5">年级：</label>
          <div class="col-sm-6">
            <select name="" id="label" class="form-control">
              <option value="">一年级</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">班级：</label>
          <div class="col-sm-6">
            <input id="id-password" placeholder="请输入所在班级" type="text" name="sex" required class="form-control">
          </div>
        </div>
        <div class="form-group col-sm-offset-2">
          <label class="control-label col-sm-5">家长手机：</label>
          <div class="col-sm-6">
            <input id="id-password" placeholder="请输入家长联系电话" type="text" name="sex" required class="form-control">
          </div>
        </div>
     </div>
  </div>
</form>`
}
function phone () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">输入新手机</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入新手机" required class="form-control jq-mobile1">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">再次输入</label>
          <div class="col-sm-6">
            <input id="id-password" placeholder="请再次输入" type="text" required class="form-control jq-mobile2">
          </div>
        </div>
     </div>
  </div>
</form>`
}
function changeclass () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">选择班级：</label>
           <div class="col-sm-6">
            <select name="" id="label" class="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
     </div>
  </div>
</form>`
}
