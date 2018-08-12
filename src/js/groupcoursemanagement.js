$(function () {
    $('.jq-switch input').on('change', function () {
        var isCheck = $(this).prop('checked')
        console.log(isCheck)
    })
})