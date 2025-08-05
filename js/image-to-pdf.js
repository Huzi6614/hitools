var files_limit=0;
var files_ids_counter=1;
var file_hash='';
/* superted files all img-to-pdf tools */
 TOOL_ALLOWED_EXT = ['png','jpg','jpeg','gif','tiff','bmp','emf','exif','ico','wmf','svg',
                        'image/jpg','image/jpeg','image/png','image/gif','image/tiff','image/bmp',
                        'image/emf','image/exif','image/ico','image/x-icon','image/wmf','image/svg','image/svg+xml','image/emf','image/x-emf','image/x-wmf'
                        ];

var dropbox_extension = ['.png','.jpg','.jpeg','.gif','.tiff','.bmp','.emf','.exif','.ico','.wmf','.svg'];
var mem_types = 'image/jpg,image/jpeg,image/png,image/gif,image/tiff,image/bmp,image/emf,image/exif,image/ico,image/x-icon,image/wmf,image/svg,image/svg+xml,image/emf,image/x-emf,image/x-wmf,windows/metafile';

$(function(){
    $("#fileUpload,#fileUpload2").attr('accept',dropbox_extension.toString());
})

function get_only_image_link_dropbox(files){
    if(files.length+files_limit <= max_file_count){
        var files_array=[];
        $(files).each(function(k,v){
            var files_data_array=[];
            var img_link=v.link;
            img_link=img_link.replace('dl=0','dl=1');
            files_data_array['name']= add_fileName_Suffix(v); //pass file;
            files_data_array['link']=img_link;
            files_array.push(files_data_array);
            file_render(v.name,img_link,v.bytes,'link');
            files_limit++;
            if(files.length-1 == k){
                setTimeout(function(){
                    $('#first_upload_section').hide();
                    showLoader(false);
                    $('#preview').show();
                    file_save(files_array,0,'link');
                },2000);
            }
        })
        $(".aca_files_count").text(files_limit);
    }else{
        show_messages('error',max_file_count+' files allowed in a single request');
        showLoader(false);
    }
}
function get_only_image_link_gDrive(files,oauthToken){
    if(files.length+files_limit <= max_file_count){
        var files_array=[];
        $(files).each(function(k,v){
            var files_data_array=[];
            files_data_array['name']= add_fileName_Suffix(v); //pass file;
            files_data_array['token']=oauthToken;
            files_data_array['gdrive']=true;
            files_data_array['link']=v.id;
            files_array.push(files_data_array);
            file_render(v.name,v.id,v.sizeBytes,'link');
            files_limit++;
            if(files.length-1 == k){
                setTimeout(function(){
                    $('#first_upload_section').hide();
                    showLoader(false);
                    $('#preview').show();
                    file_save(files_array,0,'link');
                },2000);
            }
        })
        $(".aca_files_count").text(files_limit);
    }else{
        showLoader(false);
        show_messages('error',max_file_count+' files allowed in a single request');
    }
}
// file upload for getting file content
var multi_upload_counter=3;
$(document).on('change','#fileUpload,#fileUpload2,[id*="fileUploadMulti"]',function (e) {
    var all_files=$(this).prop('files');
    var file_object=$(this);
    if(files_limit+all_files.length <= max_file_count){
        var check_file_error=false;
        var files_array=[];
        $(all_files).each(function(k,v){
            if (v.size <= 1024*1024*max_file_size) {
                f_name = add_fileName_Suffix(v); //v.name;
                f_extension = f_name.substring(f_name.lastIndexOf('.') + 1).toLowerCase();
                // validExtensions = ['gif'];
                validExtensions = [...TOOL_ALLOWED_EXT];
                if ($.inArray(f_extension, validExtensions) != -1) {
                    files_array.push($(file_object).prop('files')[k]);
                    check_file_error=true;
                    var img_link = URL.createObjectURL(e.target.files[k]);
                    file_render(f_name,img_link,v.size,'file');
                    files_limit++;
                }else{
                    show_messages('error', v.name+' file format not allowed');
                }
            }else{
                show_messages('error','Max Allowed File Size is '+max_file_size+'MB. ('+v.name.substring(0,10)+'...)');
            }
            if(all_files.length-1 == k){
                if(check_file_error){
                    $('#first_upload_section').hide();
                    $('#preview').show();
                    $("#process_button").attr('disabled','true');
                    $("#process_button").attr('title','Please wait while files are being uploaded.');
                    file_save(files_array,0,'file');
                }
            }
        });
        
        if($(file_object).attr('id') != 'fileUpload'){
            $(this).parent().hide();
            var multi_upload_counter_html='<label class="upload_btns m-1 more_btn text-white rounded-circle aca_add_btn" for="fileUploadMulti'+multi_upload_counter+'"><input type="file" name="fileUpload[]" class="d-none" id="fileUploadMulti'+multi_upload_counter+'" accept=".'+FILE_TYPE+'" multiple>+<div class="badge badge-dark rounded-pill aca_files_count">'+files_limit+'</div></label>';
            $('#add_multiple_files').append(multi_upload_counter_html);
            multi_upload_counter++;
        }
        $(".aca_files_count").text(files_limit);
    }else{
        show_messages('error',max_file_count+' files allowed in a single request');
        $('#fileUpload').val('');
    }
});
// Drag & Drop 
function _ondrop(e){
    e.preventDefault();
    if (e.dataTransfer.items) {
        var check_file_error=false;
        var files_array=[];
        if(e.dataTransfer.items.length+files_limit > max_file_count){
            show_messages('Error','Only '+max_file_count+' files allowed.');
            $('.drag_area').addClass('bg-white');
            return false;
        }else{
            for (var i = 0; i < e.dataTransfer.items.length; i++) {
                if (e.dataTransfer.items[i].kind === 'file') {
                    var file = e.dataTransfer.items[i].getAsFile();
                    fileType = file.type;
                    var validImageTypes = [...TOOL_ALLOWED_EXT];
                    if ($.inArray(fileType, validImageTypes) < 0) {
                        show_messages('Error','Only '+FILE_TYPE+' file supported');
                        $('.drag_area').addClass('bg-white');
                    }else{
                        if (parseInt(file.size) > max_file_size*1024*1024) {
                            show_messages('error','File exceeds the maximum size limit of '+max_file_size+'MB.');
                            $('.drag_area').addClass('bg-white');
                        }else{
                            files_array.push(e.dataTransfer.files[i]);
                            check_file_error=true;
                            var img_link = URL.createObjectURL(e.dataTransfer.files[i]);
                            var f_name= add_fileName_Suffix(e.dataTransfer.files[i]);
                            file_render(f_name,img_link,file.size,'file');
                            files_limit++;
                        }
                    }
                }
                if(e.dataTransfer.items.length-1 == i){
                    if(check_file_error){
                        $('#first_upload_section').hide();
                        $('#preview').show();
                        $("#process_button").attr('disabled','true');
                        $("#process_button").attr('title','Please wait while files are being uploaded.');
                        file_save(files_array,0,'file');
                    }
                }
            }
            $(".aca_files_count").text(files_limit);
        }
    }
}
function _ondragenter(e){
    e.preventDefault(); 
    $('.drag_area').css("background", "#f1f1f1");
    $('.drag_area').removeClass('bg-white');
}
function _ondragleave(e){
    e.preventDefault();
    $('.drag_area').addClass('bg-white');
}
function _ondragover(e){
    e.preventDefault();
    $('.drag_area').css("background", "#f1f1f1");
    $('.drag_area').removeClass('bg-white');
}
function file_render(name,url,size,file_type){
    var image_append='<div class="img_box" data-filename="'+name+'" title="'+name+'" data-toggle="tooltip">'+
            '<div class="img_box1 p-2 bg_383b3d">'+
                '<img id="'+'img-box-img'+files_ids_counter+'" src="'+IMGFOLDER+'/pdf-upload.gif" class="img-fluid w-100 img_box2 uploading">'+
                '<canvas id="img-box'+files_ids_counter+'" class="img-fluid w-100 img_box2 d-none"></canvas>'+
                '<img id="'+'img-box-error'+files_ids_counter+'" src="'+url+'" data-isError="false" onError="validatePreview('+files_ids_counter+')" class="img-fluid w-100 img_box2 d-none img-on-error">'+
                '<span class="d-none file_size">'+bytesToSize(size)+'</span>'+
            '</div>'+
            '<span class="d-none text-truncate w-100 d-inline-block">'+name+'</span>';
            if(file_type == 'link'){
                image_append+='<samp class="d-none" data-url="'+url+'">'+name+'</samp>';
            }
    image_append+='<img src="'+IMGFOLDER+'/range_cross.svg" class="remove_image d-none" onclick=remove_file("img-box'+files_ids_counter+'")>'+
        '</div>';
    $('#preview .append_image_box').append(image_append);
    if(file_type == 'file'){
        set_canvas_img(url,'img-box'+files_ids_counter);
    }
    files_ids_counter++;
}

//draw image to canvas
function set_canvas_img(file,selector){
    var ctx=document.getElementById(selector);
    ctx = ctx.getContext("2d");
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 0, 0,315,164);
    };
    img.src = file;
    $('#'+selector).addClass('cp');
    $('#'+selector).siblings('.img-on-error').attr('src',file);
}

function validatePreview(selector){
    selector = 'img-box'+selector;

    if(TOOL_NAME == 'tiff-to-pdf')
        img = IMGFOLDER + '/tiff.svg';
    else if(TOOL_NAME == 'wmf-to-pdf')
        img = IMGFOLDER + '/wmf.svg';
    else if(TOOL_NAME == 'exif-to-pdf')
        img = IMGFOLDER + '/exif.svg';
    else if(TOOL_NAME == 'emf-to-pdf')
        img = IMGFOLDER + '/emf.svg';
    else
        img = IMGFOLDER + '/tiff.svg';
    
    let previewImage = $('#'+selector).siblings('.img-on-error')
    previewImage.attr('src',img);
    previewImage.attr('data-isError',true);
}
function disableProcessButton(){
    $("#process_button").attr('disabled','true');
    $("#process_button").attr('title','Please wait while files are being uploaded.');
    $("#process_button").removeClass('button_blink');
    $("#process_button").css('cursor','not-allowed');
}
function file_save(all_files,index,file_type){
    disableProcessButton();
    if(index < all_files.length){
        var form_data = new FormData();
        if(file_type == 'link'){
            form_data.append('link',all_files[index].link);
            form_data.append('name',all_files[index].name);
            if(typeof all_files[index].gdrive !='undefined'){
                form_data.append('token',all_files[index].token);
                form_data.append('gd',all_files[index].gdrive);
            }
        }else{
            form_data.append('file',all_files[index],all_files[index].name);
        }
        form_data.append('hash',file_hash);
        form_data.append('tool',TOOL_NAME);
        $.ajax({
            url: base_url+'pdf-file-save/',
            type:'post',
            data:form_data,
            dataType:'json',
            processData: false,
            contentType: false,
            success:function(data){
                if(data.success == 'true'){
                    file_hash=data.hash;
                    $('#hash_inp').val(file_hash);

                    let fileName = all_files[index].name;

                    $('[data-filename="'+fileName+'"] span').removeClass('d-none');
                    $('[data-filename="'+fileName+'"] canvas:last').attr('data-value',data.name);
                    $('[data-filename="'+fileName+'"]:last').append('<input type="hidden" name="files_name[]" value="'+data.name+'">');
                    
                    if(file_type == 'link'){
                        var new_selector=$('[data-url="'+all_files[index].link+'"]').last().parent().find('canvas').attr('id');
                        $(new_selector).removeAttr('data-url');
                        var newPath= TEMPFILES + data.name;
                        set_canvas_img(newPath,new_selector);
                        setTimeout(function(){
                            toggle_preview(fileName)
                        },500)
                    }else{
                        toggle_preview(fileName)
                    }
                    file_save(all_files,index+1,file_type);
                }else{
                    show_messages('error', "Error uploading the file "+ all_files[index].name.substring(0,15)+"...");
                    $('[data-filename="'+all_files[index].name+'"]').remove(); //remove that uploading placeholder from dom
                    all_files.splice(index,1); //remove that file from the list
                    index--; 
                    files_limit--;
                    $(".aca_files_count").text(files_limit);
                    file_save(all_files,index+1,file_type);
                    if(files_limit == 0){
                        $('#first_upload_section').show();
                        $('#preview').hide();
                        $("#process_button").removeClass('button_blink');
                        $('#fileUpload').val('');
                        result_focus('first_upload_section');
                    }
                }
            }
        });
    }else{
        showLoader(false);
        //result_focus('process_now');
        $("#process_button").addClass('button_blink');
        $("#process_button").removeAttr('title');
        $("#process_button").removeAttr('disabled');
        $("#process_button").css('cursor','pointer');
    }
}
function toggle_preview(fileName){
    $('[data-filename="'+fileName+'"] .uploading').remove();
    isPreveiwError = $('[data-filename="'+fileName+'"] .img-on-error').data('iserror');
    if(!isPreveiwError){
        $('[data-filename="'+fileName+'"] canvas').removeClass('d-none');
        $('[data-filename="'+fileName+'"] .img-on-error').remove();
    }else{
        $('[data-filename="'+fileName+'"] .img-on-error').removeClass('d-none');
    }
    $('[data-filename="'+fileName+'"]').find('.remove_image').removeClass('d-none');
    $('[data-filename="'+fileName+'"]').removeAttr('data-filename');
}
//remove file
function remove_file(selector){
    var file_selector=$('[id="'+selector+'"]');
    var file_name=$(file_selector).attr('data-value');
    var form_data = new FormData();
    form_data.append('file_name',file_name);
    form_data.append('hash',file_hash);
    showLoader(true);
    $.ajax({
        url: base_url+'pdf-file-delete/',
        type:'post',
        data:form_data,
        dataType:'json',
        processData: false,
        contentType: false,
        success:function(data){
            showLoader(false);
            if(data.success == 'true'){
                $(file_selector).parent().parent().remove();
                $(".tooltip").tooltip("hide");
                $('#password_inp'+selector).parent().parent().remove();
                $('#file_password_inp'+selector).remove();
                if(files_limit != 0){
                    files_limit--;
                    $(".aca_files_count").text(files_limit);
                }
                if(files_limit == 0){
                    $('#preview').hide();
                    $('#first_upload_section').show();
                    $("#process_button").removeClass('button_blink');
                    $('#fileUpload').val('');
                }
            }else{
                showLoader(false);
            }
        }
    });
}

//check submission validation
function check_validation(){
    if(files_limit >= 1){
        showLoader(true);
        captcha_submit();
    }else{
        show_messages('Error', 'No image found! Please add an image to proceed.');
    }
}
//size Conversion
function bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
// add suffix to file names
let suffix_counter = 1;
function add_fileName_Suffix(file){//receives files object
   f_name = file.name;
    const regex = /[^a-zA-Z0-9\.\_\-\s*]/g;
    f_name = f_name.replace(regex,'').replace('_','-'); 
    f_extension = f_name.substring(f_name.lastIndexOf('.') + 1);
    fileName = f_name.split('.').slice(0, -1).join('.');
    if(fileName.length >80){
        fileName = fileName.substring(0,80);
    } else if(fileName.length < 2){
        fileName = (Math.random() + 1).toString(36).substring(7);
    }
    Object.defineProperty(file, 'name', { // change file name before upload 
        writable: true,
        value: fileName+"-"+suffix_counter+"."+f_extension
    });
    suffix_counter++;
    return file.name;
}

$(function() {
    $('body').bttooltip({
        selector:'[data-toggle="tooltip"]'
    });

    // prevent form submission on enter 
    $(document).on("keydown", "form", function(event) { 
        return event.key != "Enter";
    });

    // hide tooltip on scroll
    $(window).scroll(function(){
        if($('.tooltip').hasClass('show')){
            $('.tooltip').removeClass('show');
        }
    });
});