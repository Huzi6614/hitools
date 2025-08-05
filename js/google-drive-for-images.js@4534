if (typeof multiple_allow != "undefined") {
    var multiple_allowed = true;
} else {
    var multiple_allowed = false;
}
if (typeof mem_types != "undefined") {
    var allowed_types = mem_types;
} else {
    var allowed_types = "image/png,image/jpeg,image/jpg,image/gif,image/webp,image/svg,image/tiff,image/jfif,image/ico,image/bmp";
}
// The Browser API key obtained from the Google API Console.
// Replace with your own Browser API key, or your own key.
// var developerKey = "AIzaSyDLmAOdK0ms3BLMZb_Oh0QAh3RZTWuHVcA";
// for live
var developerKey = "AIzaSyDBxYoW9K44WJsjwrTmHiZIu5dAdGH-vwM";

// The Client ID obtained from the Google API Console. Replace with your own Client ID.
// var clientId ="121180400003-ndufrkhc9klscvgdipcoc8mek0nbkic9.apps.googleusercontent.com";
// for live
var clientId ="920265336102-cpgv079haig3nq26s4qidms0j867bedv.apps.googleusercontent.com";

// Scope to use to access user's Drive items.
var scope = ["https://www.googleapis.com/auth/drive"];

var pickerApiLoaded = false;
var oauthToken;

// Use the Google API Loader script to load the google.picker script.
function loadPicker() {
    setTimeout(() => {
        $(".tooltip").tooltip("hide");
    }, 600);
    gapi.load("auth", { callback: onAuthApiLoad });
    gapi.load("picker", { callback: onPickerApiLoad });
}
function onAuthApiLoad() {
    window.gapi.auth.authorize(
        {
            client_id: clientId,
            scope: scope,
            immediate: false
        },
        handleAuthResult
    );
}
function onPickerApiLoad() {
    pickerApiLoaded = true;
    createPicker();
}
function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        createPicker();
    }
}
// Create and render a Picker object for searching images.
function createPicker() {
    if (multiple_allowed) {
        if (pickerApiLoaded && oauthToken) {
            var view = new google.picker.View(google.picker.ViewId.DOCS);
            view.setMimeTypes(allowed_types);
            var picker = new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.NAV_HIDDEN)
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                // .setAppId(appId)
                .setOAuthToken(oauthToken)
                .addView(view)
                .addView(new google.picker.DocsUploadView())
                .setDeveloperKey(developerKey)
                .setCallback(pickerCallback_multiple)
                .build();
            picker.setVisible(true);
        }
    } else {
        if (pickerApiLoaded && oauthToken) {
            var view = new google.picker.View(google.picker.ViewId.DOCS);
            view.setMimeTypes(allowed_types);
            var picker = new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.NAV_HIDDEN)
                // .setAppId(appId)
                .setOAuthToken(oauthToken)
                .addView(view)
                .addView(new google.picker.DocsUploadView())
                .setDeveloperKey(developerKey)
                .setCallback(pickerCallback)
                .build();
            picker.setVisible(true);
        }
    }
}
// A Single File callback implementation.
function pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
        var File_size = parseInt(data.docs[0].sizeBytes);
        // Size in MB
        if (typeof gDrive_size != "undefined") {
            var allowed_size = gDrive_size;
        } else {
            var allowed_size = 5;
        }

        var LimitSize = parseInt(1024 * 1024 * allowed_size);
        if(data.docs[0].name.split('.').pop() == 'rtf'){
            show_messages(
                "Error",
                "RTf File Extension Not Allowed."
            );
            showLoader(false);
            return false;
        }
        if (File_size <= LimitSize) {
            if (typeof new_loader != "undefined") {
                sst_loader(new_loader,true);
            }else{
                $("#loader_con").removeClass("d-none");
            }
            if (typeof get_only_image_link_gDrive != "undefined") {
                get_only_image_link_gDrive(data, oauthToken);
            } else {
            }
        } else {
            show_messages(
                "Error",
                "Please select File smaller than " + allowed_size + "MB."
            );
        }
    }
}
// Multiple Files Callback
function pickerCallback_multiple(data) {
    if (data.action == google.picker.Action.PICKED) {
        // Size in MB
        if (typeof gDrive_size != "undefined") {
            var allowed_size = gDrive_size;
        } else {
            var allowed_size = 5;
        }
        var LimitSize = parseInt(1024 * 1024 * allowed_size);
        var return_array = [];
        var return_status = false;
        $(data.docs).each(function(k, v) {
            var File_size = parseInt(v.sizeBytes);
            if(v.name.split('.').pop() == 'rtf'){
                show_messages(
                    "Error",
                    "RTf File Extension Not Allowed."
                );
                return ; //continue to next file
            }
            if (File_size <= LimitSize) {
                return_array.push(v);
                return_status = true;
            } else {
                show_messages(
                    "Error",
                    "Max allowed file size is " + allowed_size + "MB."
                );
            }
            if (data.docs.length - 1 == k) {
                if (return_status) {
                    if (typeof get_only_image_link_gDrive != "undefined") {
                        if (typeof new_loader != "undefined") {
                            sst_loader(new_loader,true);
                        }else{
                            $("#loader_con").removeClass("d-none");
                        }
                        get_only_image_link_gDrive(return_array, oauthToken);
                    }
                }
            }
        });
    }
}
