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
  var comment = {
    init: function () {
      this.testNav()
      this.tableSwitch()
      this.toSentence()
      this.fullBlank()
      this.customRadio()
    },
    /**
     * 闯关答题
     */
    /**
     * 
     * 
     */
    /**
     * 
     * 
     */
    customRadio: function () {
      /**
       * 模拟单选框
       */
      $('.coustom-label.can .label').on('click', function () {
        var $this = $(this)
        if ($this.hasClass('active')) {
        } else {
          $this.addClass('active').parent().siblings().find('.label').removeClass('active')
          $this.find('input').prop('checked', true)
        }
        console.log($this.parent().parent().find('input:checked').val())
        return false
      })
      var $writeInput = $(".coustom-label .write-input")
      $writeInput.on('focus', function() {
        $(this).addClass('active')
      })
      $writeInput.on('blur', function() {
        $(this).removeClass('active')
      })
    },
    /**
     * 默写填空相关事件
     */
    fullBlank: function () {
      var $input = $('#readText-blank input')
      $input.on('focus', function () {
        var $this = $(this)
        $this.addClass('active').parent('.readText-blank-item').siblings().find('input').removeClass('active')
      })
      $input.on('blur', function () {
        $(this).removeClass('active')
      })
      $input.eq(0).focus()
    },
    /**
     * 看字组句页面事件
     */
    toSentence: function () {
      // input框背景切换
      var $input = $('#readText-write input')
      $input.on('focus', function () {
        var $this = $(this)
        $this.addClass('active').parent().siblings().find('input').removeClass('active')
      })
      $input.on('blur', function () {
        var $this = $(this)
        $this.removeClass('active')
      })
      $input.eq(0).focus()
      var $btn = $('#readText-write .readText-write-btn')
      $btn.on('click', function () {
        $input.val('').eq(0).focus()
      })
    },
    /**
     * 个人中心测试记录导航切换
     * @author xc
     */
    testNav: function () {
      $('#test-nav ul li').on('click', function () {
        var $li = $(this)
        var $index = $(this).index()
        var activeName = 'active'
        if ($li.hasClass(activeName)) {
          return false
        }
        $li.addClass(activeName).siblings().removeClass(activeName)
        $li.siblings('.line').css('left', $li.position().left)
        $('#test-box .test-item').eq($index).addClass(activeName).siblings().removeClass(activeName)
      })
    },
    /**
     * 单词表 隐藏全部，显示全部开关
     * @author xc
     */
    tableSwitch: function () {
      $('.xc-body .table-switch').on('click', function () {
        var $this = $(this)
        if ($this.hasClass('active')) {
          $this.removeClass('active')
        } else {
          $this.addClass('active')
        }
      })
    }
  }
  comment.init()
})
