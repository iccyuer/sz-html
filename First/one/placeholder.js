/**
 * Created by Admin on 2018/4/14.
 */
function placeholderUtil(label, input, text) {
    label.innerHTML = text;
    input.oninput = function () {
        //输入时消失
        label.style.display = "none";

    };
    //失去焦点，input框没内容后，再显示
    input.onblur = function () {
        if (input.value.length === 0) {
            label.style.display = "inline-block";
        }
    };
}
