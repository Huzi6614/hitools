// The Browser API key obtained from the Google API Console.
// Replace with your own Browser API key, or your own key.
// var developerKey = "AIzaSyDLmAOdK0ms3BLMZb_Oh0QAh3RZTWuHVcA"; // for local and v1
var developerKey = "AIzaSyDBxYoW9K44WJsjwrTmHiZIu5dAdGH-vwM";
// for live
// var developerKey = "AIzaSyDBxYoW9K44WJsjwrTmHiZIu5dAdGH-vwM";

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
    if (pickerApiLoaded && oauthToken) {
        var view = new google.picker.View(google.picker.ViewId.DOCUMENTS);
        // view.setMimeTypes("image/png,image/jpeg,image/jpg");
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
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
// A simple callback implementation.
function pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        var File_size = parseInt(data.docs[0].sizeBytes);
        var LimitSize = parseInt(5097152);

        if (File_size <= LimitSize) {
            g_drive_get_file(fileId);
        } else {
            if (typeof upload_section_show != "undefined") {
                upload_section_show();
            }
            show_messages("Error", "Please select File smaller than 5MB.");
        }
    }
}
function g_drive_get_file(fileId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/drive/v2/files/" + fileId);
    xhr.setRequestHeader("Authorization", "Bearer " + oauthToken);
    xhr.onload = function(e) {
        isExport = true;
        var res = JSON.parse(xhr.responseText);
        if (res.hasOwnProperty("exportLinks")) {
            fileUrl =
                res.exportLinks[
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ];
        } else {
            isExport = false;
            fileUrl = res.downloadUrl;
        }
        $.ajax({
            xhr: function() {
				var xhr = new window.XMLHttpRequest();
				xhr.upload.addEventListener("progress", function(evt) {
					if (evt.lengthComputable) {
						var percentage = evt.loaded / evt.total;
						percentage = parseInt(percentage * 100);
						var Loader_text=Uploading+percentage+'%';
						if(percentage == 100){
							var Loader_text=Processing;
						}
						sst_loader(Loader_text,true);
					}
				}, false);
				return xhr;
			},
            url: base_url + "get-google-drive-file-content/",
            type: "post",
            data: {
                file_id: fileId,
                token___: oauthToken,
                file_url: fileUrl,
                export: isExport,
                mem: res.mimeType
            },
            success: function(response) {
                sst_loader('',false);
                if (response.type == "success") {
                    if (typeof upload_section_hide != "undefined") {
                        upload_section_hide();
                    }
                    $("#textbox,#textbox1").val(response.msg);
                    if (typeof count != "undefined") {
                        count();
                    }
                } else {
                    if (typeof upload_section_show != "undefined") {
                        upload_section_show();
                    }
                    show_messages("Error", response.msg);
                    return false;
                }
            }
        });
    };
    xhr.onerror = function() {};
    xhr.send();
}
