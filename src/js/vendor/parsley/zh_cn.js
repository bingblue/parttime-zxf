// Validation errors messages for Parsley
// Load this after Parsley
var parseRequirement = function (requirement) {
  if (isNaN(+requirement))
    return parseFloat(jQuery(requirement).val());
  else
    return +requirement;
};
// Greater than validator
window.Parsley.addValidator('gt', {
  validateString: function (value, requirement) {
    return parseFloat(value) > parseRequirement(requirement);
  },
  priority: 32
});
Parsley.addMessages('zh-cn', {
  defaultMessage: "<i class='erricon'></i>请输入正确的值",
  type: {
    email:        "<i class='erricon'></i>请输入正确格式的邮箱地址",
    url:          "<i class='erricon'></i>请输入一个有效的链接",
    number:       "<i class='erricon'></i>请输入正确的数字",
    integer:      "<i class='erricon'></i>请输入正确的整数",
    digits:       "<i class='erricon'></i>请输入正确的号码",
    alphanum:     "<i class='erricon'></i>请输入字母或数字"
  },
  notblank:       "请输入值",
  required:       "<i class='erricon'></i>必填项",
  pattern:        "<i class='erricon'></i>格式不正确",
  min:            "<i class='erricon'></i>输入值请大于或等于 %s",
  max:            "<i class='erricon'></i>输入值请小于或等于 %s",
  range:          "<i class='erricon'></i>输入值应该在 %s 到 %s 之间",
  minlength:      "<i class='erricon'></i>请输入至少 %s 个字符",
  maxlength:      "<i class='erricon'></i>请输入至多 %s 个字符",
  length:         "<i class='erricon'></i>字符长度应该在 %s 到 %s 之间",
  mincheck:       "<i class='erricon'></i>请至少选择 %s 个选项",
  maxcheck:       "<i class='erricon'></i>请选择不超过 %s 个选项",
  check:          "<i class='erricon'></i>请选择 %s 到 %s 个选项",
  equalto:        "<i class='erricon'></i>输入值不同",
  price:          "<i class='erricon'></i>您填的价格不符",
  price2:         "<i class='erricon'></i>您填的价格不符",
  mycustom:       "<i class='erricon'></i>验证码不对",
  mobile:         "<i class='erricon'></i>手机号已使用",
  gtnowdate:      "<i class='erricon'></i>日期不能小于今天",
  gt:             "<i class='erricon'></i>请输入大于0的值"                    
});

Parsley.setLocale('zh-cn');
