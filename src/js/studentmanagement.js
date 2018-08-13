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
      if (isConfirm) {
        swal("修改成功", "success")
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
      } else {
        swal("失败", "请填完表单内容")
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
  // 学生管理 分配教师
  $('.jq-changeschool').click(function(){
    swal({
      title: "分配教师",
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
  // 学生管理 调换老师
  $('.jq-exchangeschool').click(function(){
    swal({
      title: "调换老师",
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
  // 学生管理 充值
  $('.jq-recharge').click(function(){
    swal({
      title: "为学生充值",
      text: recharge(),
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal({
          title: "确定为学生：【学生名】【电话】、【学生名】【电话】、【学生名】【电话】、【学生名】【电话】 进行充值吗？",
          text: rechargeconfim(),
          html: true,
          confirmButtonColor: "#DD6B55",
          closeOnConfirm: false,
          closeOnCancel: false
        })
      }
    })
  })
  // 学生管理 充值记录
  $('.jq-record').click(function(){
    swal({
      title: "充值记录",
      text: rechargerecord(),
      html: true,
      confirmButtonColor: "#DD6B55",
      closeOnConfirm: false,
      closeOnCancel: true
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
          <p class="input-group date col-sm-6 datetimepicker pdlr-15">
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
function changeschool () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">选择教师：</label>
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
function createclass () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">班级名称</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入" required class="form-control">
          </div>
        </div>
     </div>
  </div>
</form>`
}
function add () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
  <p>增加/减少 【学生名】【电话】、【学生名】【电话】、【学生名】【电话】、【学生名】【电话】 的学币</P>
     <div class="panel-body">
        <div class="form-group">
          <label class="control-label col-sm-5">增加/减少学币：</label>
          <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入" required class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-5">输入原因：</label>
          <div class="col-sm-6">
            <textarea type="text" name="name" placeholder="请输入原因，学生将能看见您输入的原因" required class="form-control"></textarea>
          </div>
        </div>
     </div>
  </div>
</form>`
}
function record () {
  return `<form class="text-right form-lineH">
  <div class="row">
    <div class="form-group col-sm-2">
      <div class="radio c-radio">
        <label>
           <input type="radio" name="a" value="option1">
           <span class="fa fa-circle"></span>全部</label>
     </div>
    </div>
    <div class="form-group col-sm-2">
      <div class="radio c-radio">
        <label>
           <input type="radio" name="a" value="option1">
           <span class="fa fa-circle"></span>增加</label>
     </div>
    </div>
    <div class="form-group col-sm-2">
      <div class="radio c-radio">
        <label>
           <input type="radio" name="a" value="option1">
           <span class="fa fa-circle"></span>减少</label>
     </div>
    </div>
  </div>
</form>
<div class="table-responsive">
  <table class="table table-bordered table-hover dataTable">
    <thead>
      <tr>
        <th>操作时间</th>
        <th>操作类型</th>
        <th>数量</th>
        <th>原因</th>
      </tr>
    </thead>
    <tbody id="designerlist">
      <tr>
        <td class="text-warning">2018-01-01 22:22:22</td>
        <td>增加</td>
        <td>1000</td>
        <td class="reason">原因原因原因</td>
      </tr>
      <tr>
        <td class="text-warning">2018-01-01 22:22:22</td>
        <td>增加</td>
        <td>1000</td>
        <td class="reason">原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因</td>
      </tr>
    </tbody>
  </table>
</div>
<ul class="pagination pagination-sm m0">
  <li>
    <a href="#" aria-label="Previous">
      <span aria-hidden="true">«</span>
    </a>
  </li>
  <li>
    <a href="#">1</a>
  </li>
  <li>
    <a href="#">2</a>
  </li>
  <li class="active">
    <a href="#">3</a>
  </li>
  <li>
    <a href="#" aria-label="Next">
      <span aria-hidden="true">»</span>
    </a>
  </li>
</ul>`
}
function rechargerecord () {
  return `<div class="table-responsive">
  <table class="table table-bordered table-hover dataTable">
    <thead>
      <tr>
        <th>充值时间</th>
        <th>充值学员组</th>
        <th>时长</th>
        <th>学生手机</th>
        <th>学生姓名</th>
        <th>操作人</th>
      </tr>
    </thead>
    <tbody id="designerlist">
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>小学</td>
        <td>5天</td>
        <td>180000000000</td>
        <td>学生姓名</td>
        <td>校长姓名（校长）</td>
      </tr>
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>小学</td>
        <td>5天</td>
        <td>180000000000</td>
        <td>学生姓名</td>
        <td>校长姓名（校长）</td>
      </tr>
      <tr>
        <td>2018-01-01 22:22:22</td>
        <td>小学</td>
        <td>5天</td>
        <td>180000000000</td>
        <td>学生姓名</td>
        <td>校长姓名（校长）</td>
      </tr>
    </tbody>
  </table>
</div>
<ul class="pagination pagination-sm m0">
  <li>
    <a href="#" aria-label="Previous">
      <span aria-hidden="true">«</span>
    </a>
  </li>
  <li>
    <a href="#">1</a>
  </li>
  <li>
    <a href="#">2</a>
  </li>
  <li class="active">
    <a href="#">3</a>
  </li>
  <li>
    <a href="#" aria-label="Next">
      <span aria-hidden="true">»</span>
    </a>
  </li>
</ul>`
}
function recharge () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
    <p>充值对象：【学生名】【电话】、【学生名】【电话】、【学生名】【电话】、【学生名】【电话】</p>
    <p class="text-danger">共99名学生</p>
     <div class="panel-body">
        <div class="form-group">
          <label class="control-label col-sm-5">选择学员组：</label>
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
        <div class="form-group">
           <label class="control-label col-sm-5">充值时长：</label>
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
function rechargeconfim () {
  return `<p class="text-danger">充值用户组：小学</p>
  <p class="text-danger">充值时长：90天</p>`
}