function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        alert("You can only paste URL!");
    }
}
function clearEditor() {
    var clrjson = {};
    editorText1 = editor.getText();
    if (editorText1.trim() !== "{}" && editorText1.trim() !== "")
        editor.update(clrjson);
}
function downloadJson() {
    var blob = new Blob([editor2.getText()], {
        type: "application/json;charset=utf-8",
    });
    saveAs(blob, "Hi Free Tools.json");
}
function GetJson(){
    let url = document.getElementById("fileUrl").value.trim();
    let token = $("#-response").val();
    grecaptcha.reset();
    showLoader(true);
    $.ajax({
        type:'post',
        data:{url,'-response':token,ext:'json'},
        dataType: 'json',
        url:base_url+'get-url-content',
        success:function(response) {
            showLoader(false);
            editor.setText(response.content);
            let action = $("#json_action").val();
            passVal(action);
        },
        error:function(error){
            error = JSON.parse(error.responseText);
            showLoader(false);
            new_error_message(NEW_ERROR_MESSAGE,'error',error.text)
            return false;
        }
    }); 
}
function validatejson(show_validation_message) {
    $("#result").hide();
    var clearjson = {};
    editor2.update(clearjson);
    var myjson = editor.getText();
    if (!myjson.length || myjson.trim() == "{}") {
        if ($("#fileUrl").val()) {
            if (passVal("url") == false) {
                return false;
            }
        } else {
            new_error_message(NEW_ERROR_MESSAGE,'error', EMPTY_INPUT_FIELD);
            return false;
        }
        myjson = editor.getText();
    }
    try {
        var result = jsonlint.parse(myjson);
        if (result && Object.keys(result).length !=0) {
            if (show_validation_message) {
                $("#result").show();
                document.getElementById("result").innerHTML = JSON_IS_VALID;
                document.getElementById("result").className =
                    "alert alert-success text-center";
            }
        }else{
            new_error_message(NEW_ERROR_MESSAGE,'error',"Please insert json First!")
            return false;
        }
    } catch (e) {
        $("#result").show();
        document.getElementById("result").innerHTML = e;
        document.getElementById("result").className =
            "alert alert-danger text-center";
    }
}
firsteditor = function () {
    if (
        !jsoneditor.fullscreenElement &&
        !jsoneditor.mozFullScreenElement &&
        !jsoneditor.webkitFullscreenElement &&
        !jsoneditor.msFullscreenElement
    ) {
        if (jsoneditor.requestFullscreen) {
            jsoneditor.requestFullscreen();
        } else if (jsoneditor.mozRequestFullScreen) {
            jsoneditor.mozRequestFullScreen();
        } else if (jsoneditor.webkitRequestFullScreen) {
            jsoneditor.webkitRequestFullScreen();
        } else if (jsoneditor.msRequestFullscreen) {
            jsoneditor.msRequestFullscreen();
        }
    }
    if(document.fullscreenElement || document.webkitIsFullScreen || document.webkitCurrentFullScreenElement ){
        if (document.exitFullscreen ) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
};
secondeditor = function () {
    if (
        !jsoneditor2.fullscreenElement &&
        !jsoneditor2.mozFullScreenElement &&
        !jsoneditor2.webkitFullscreenElement &&
        !jsoneditor2.msFullscreenElement
    ) {
        if (jsoneditor2.requestFullscreen) {
            jsoneditor2.requestFullscreen();
        } else if (jsoneditor2.mozRequestFullScreen) {
            jsoneditor2.mozRequestFullScreen();
        } else if (jsoneditor2.webkitRequestFullScreen) {
            jsoneditor2.webkitRequestFullScreen();
        } else if (jsoneditor2.msRequestFullscreen) {
            jsoneditor2.msRequestFullscreen();
        }
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    sampleTextarea.setAttribute("display", "none");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
    new_error_message(NEW_ERROR_MESSAGE,"success", "Code copied to clipboard.");
}