$(".dropbox").click(function() {
    setTimeout(() => {
        $(".tooltip").removeClass("show");
    }, 800);
    if (typeof dropbox_extension != "undefined") {
        var allow_extension = dropbox_extension;
    } else {
        var allow_extension = [".jpg", ".jpeg", ".png", ".gif"];
    }
    // Size in MB
    if (typeof dropbox_size != "undefined") {
        var allowed_size = dropbox_size;
    } else {
        var allowed_size = 5;
    }
    // For Select Multiple Files
    if (typeof multiple_allow != "undefined") {
        var multiple_allowed = true;
    } else {
        var multiple_allowed = false;
    }
    options = {
        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            if (typeof new_loader != "undefined") {
                sst_loader(new_loader,true);
            }else{
                $("#loader_con").removeClass("d-none");
            }
            if (typeof get_only_image_link_dropbox != "undefined") {
                get_only_image_link_dropbox(files);
            }
        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        cancel: function() {},

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        linkType: "preview", // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        multiselect: multiple_allowed, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        extensions: allow_extension,

        // Optional. A limit on the size of each file that may be selected, in bytes.
        // If specified, the user will only be able to select files with size
        // less than or equal to this limit.
        // For the purposes of this option, folders have size zero.
        sizeLimit: 1024 * 1024 * allowed_size // or any positive number
    };
    Dropbox.choose(options);
});
