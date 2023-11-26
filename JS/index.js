$(document).ready(function() {
    var likeCount = 0;
    var shareCount = 0;
    var bookmarkCount = 0;

    var img_src_count = 1;

    $('#like img').click(function() {
        likeCount++;
        $('#like-count').text(likeCount);
        if (likeCount > 0) {
            $(this).attr('src', './icons/like_icon_colored.png');
        }
    }).dblclick(function() {
        likeCount = 0;
        $('#like-count').text(likeCount);
        $(this).attr('src', './icons/like_icon_grey.png');
    });

    $('#share img').click(function() {
        shareCount++;
        $('#share-count').text(shareCount);
        if (shareCount > 0) {
            $(this).attr('src', './icons/share_icon_colored.png');
        }
    }).dblclick(function() {
        shareCount = 0;
        $('#share-count').text(shareCount);
        $(this).attr('src', './icons/share_icon_grey.png');
    });

    $('#bookmark img').click(function() {
        bookmarkCount++;
        $('#bookmark-count').text(bookmarkCount);
        if (bookmarkCount > 0) {
            $(this).attr('src', './icons/bookmark_icon_colored.png');
        }
    }).dblclick(function() {
        bookmarkCount = 0;
        $('#bookmark-count').text(bookmarkCount);
        $(this).attr('src', './icons/bookmark_icon_grey.png');
    });

    $('#notify img').click(function() {

        if(img_src_count == 1)
        {
            $(this).attr('src', './icons/notification_icon_grey.png');
            $('#notify_status').text("Don't Notify Me");
            img_src_count++;
        }
        else if(img_src_count == 2)
        {
            $(this).attr('src', './icons/notification_icon_green.png');
            $('#notify_status').text("Notify Me");
            img_src_count++;
        }
        else if(img_src_count == 3)
        {
            $(this).attr('src', './icons/notification_icon_yellow.png');
            $('#notify_status').text("Notify Me Less");
            img_src_count++;
        }
        else if(img_src_count == 4)
        {
            $(this).attr('src', './icons/notification_icon_red.png');
            $('#notify_status').text("Notify Me More");
            img_src_count = 1;
        }

        // var img_src = document.getElementById("img_notify").getAttribute("src");
        // if(img_src == 'notification_icon_grey.png')
        // {
        //     $(this).attr('src', 'notification_icon_green.png');
        // }
        // else if(img_src =='notification_icon_green.png')
        // {
        //     $(this).attr('src', 'notification_icon_yellow.png');
        // }
        // else if(img_src =='notification_icon_yellow.png')
        // {
        //     $(this).attr('src', 'notification_icon_red.png');
        // }
        // else if(img_src =='notification_icon_red.png')
        // {
        //     $(this).attr('src', 'notification_icon_grey.png');
        // }



        // if(img_flag)
        // {
        //     $(this).attr('src', 'notification_icon_grey.png');
        //     img_flag = false;
        // }
        // else
        // {
        //     $(this).attr('src', 'notification_icon_colored.png');
        //     img_flag = true;
        // }

    });
});
