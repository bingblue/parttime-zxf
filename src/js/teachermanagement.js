$(function(){
  // 教师列表 停用账号
  $('.jq-stop').click(function(){
    swal({
      title: "确认停用该教师账号吗？",
      text: stop(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确认修改",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
  // 教师列表 查看班级
  $('.jq-check').click(function(){
    swal({ 
      title: "查看班级",
      text: checkclass(),
      html: true,
      allowOutsideClick: true
    })
  })
  // 教师列表 修改资料
  $('.jq-change').click(function(){
    swal({
      title: "创建教师/修改资料",
      text: change(),
      html: true,
      type: 'input',
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "创建/保存修改",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
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
function stop () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
    <p>停用该教师账号，您必须将账号下的学生和班级转移给其他老师</p>
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
function checkclass () {
  return `<div class="table-responsive record-table">
  <table class="table table-bordered table-hover dataTable">
    <thead>
      <tr>
        <th>创建时间</th>
        <th>班级名称</th>
        <th>学生人数</th>
      </tr>
    </thead>
    <tbody id="designerlist">
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>未分班</td>
        <td>10</td>
      </tr>
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>过期学员</td>
        <td>10</td>
      </tr>
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>班级名称班级名称</td>
        <td>10</td>
      </tr>
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>班级名称班级名称</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
</div>  `
}
function change () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">教师姓名：</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">教师手机：</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入" required class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">账号状态：</label>
          <div class="col-sm-6 text-lt">
            <label class="switch switch-lg">
              <input type="checkbox" checked="checked">
              <span></span>
            </label>
          </div>
          
        </div>
     </div>
  </div>
</form>`
}