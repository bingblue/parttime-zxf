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
    }
  }
  comment.init()
})
