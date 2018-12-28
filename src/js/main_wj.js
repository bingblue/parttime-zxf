'use strict'
$(function () {
  /**
   * 功能介绍,每个方法请写注释，按下面模板来写.
   * @author <作者>
   * @param {类型} 参数名 描述.
   * @param {string} name=alice 姓名(默认alice).
   * @param {object} option 配置信息.
   * @return {Number} 返回值描述.
   */
  /**
   * 验证手机号码11位数字
   * @param mobile 手机号码
   */
  function testmobile (mobile) {
    let mobilereg = /^1\d{10}$/
    return mobilereg.test(mobile)
  }
  /**
   * 错误提示
   * @param {*} errtxt 提示内容
   */
  function errcue (errtxt) {
    $('.errcue').removeClass('none')
    $('.err-txt').html(errtxt)
  }
  function cutdown ($el) {
    let countdown = 5
    let setintervalfn = setInterval(function () {
      if (countdown === 0) {
        $el.prop('disabled', false).empty().prepend('获取验证码')
        countdown = 5
        clearInterval(setintervalfn)
      } else {
        countdown--
        $el.prop('disabled', true)
        let valValue = countdown + 's后重发'
        $el.empty().prepend(valValue)
      }
    }, 1000)
  }
  $('.getcode-btn').click(function () {
    cutdown($('.getcode-btn'))
  })

  /**
   * 点击登陆验证手机号码
   */
  $('#loginbtn').click(function () {
    let mobile = $('.mobile-ipt').val()
    let pwd = $('.pwd').val()
    if (!mobile) {
      errcue('内容不能为空')
      return false
    } else if (!testmobile(mobile)) {
      errcue('请填写正确的手机号码')
      return false
    } else if (!pwd) {
      errcue('内容不能为空')
    }
  })
  /**
   * input聚焦时 错误提示消失
   */
  $('.login-ipt').focus(function () {
    $('.errcue').addClass('none')
  })
  /**
   * 点击注册按钮
   */
  $('.login-btn').click(function () {
    let mobile = $('.mobile-ipt').val()
    let pwd = $('.pwd').val()
    if (!mobile) {
      errcue('内容不能为空')
      return false
    } else if (!testmobile(mobile)) {
      errcue('请填写正确的手机号码')
      return false
    } else if (!pwd) {
      errcue('内容不能为空')
    }
  })
  /**
   * 点击喇叭 图片高亮
   */
  $('.horn-a').click(function () {
    let boo = $(this).hasClass('horn-a-active')
    if (boo) {
      $(this).removeClass('horn-a-active')
    } else {
      $(this).addClass('horn-a-active')
    }
  })
  /**
   * 弹框消失
   */
  $('.delete-icon').click(function () {
    $('.bomb-wp').hide()
  })
  /**
   * 重置
   */
  // $('.reset-btn').click(function () {
  //   $(this).siblings('.ipt').val('')
  // })
  $('.jq-changecourse').click(function () {
    $('.jq-bomb-wp').show()
  })
})
