function ch(cla) {
    var div_class, old_span, old_span_class, text, new_span_class, old_span_class_name, new_span_class_name = "";
    var comment_count = 0;
    var div_class = "." + cla;
    var old_span = '.' + $(div_class).parent().attr("class") + ' ' + 'span';

    var old_span_class = $(old_span).attr('class');
    var text = old_span_class.replace(/[^-.a-z\s]/g, '');
    var comment_count = old_span_class.replace(/\D/g, '');
    var comment_count = comment_count - 1;
    var new_span_class = text + "_" + comment_count;
    var old_span_class_name = '.' + old_span_class;
    $(old_span_class_name).attr('class', new_span_class);
    var new_span_class_name = '.' + new_span_class;
    if (comment_count >= 0) {
        $(old_span_class_name).attr('class', new_span_class);

        $(new_span_class_name).html(comment_count);

    }

}
