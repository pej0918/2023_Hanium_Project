$(document).ready(function() {
	$('#FileButton').on('change', function() {
		// 파일 선택 시 자동으로 upload 버튼 클릭
		$('#UploadButton').trigger('click');
	});
});

/*로딩 완료시 로딩 화면 숨기기*/
$(document).ready(function() { 
$('#loading').hide();

/*로딩화면 띄우기*/
$('#targets').submit(function(){
$('#loading').show();
 return true; });
});
/*로딩 완료시 로딩 화면 숨기기*/
$(document).ready(function() { 
$('#loading').hide();

/*로딩화면 띄우기*/
$('#target').submit(function(){
$('#loading').show();
 return true; });
});

/*로딩 완료시 로딩 화면 숨기기*/
$(document).ready(function() { 
$('#loading').hide();

/*로딩화면 띄우기*/
$('#target2').submit(function(){
$('#loading').show();
 return true; });
});


/*pdf 파일 업로드*/
$(document).ready(function(){
  var fileTarget = $('.file_box .upload-hidden');

  fileTarget.on('change', function(){  // 값이 변경되면
    if(window.FileReader){  // modern browser
      var filename = $(this)[0].files[0].name;
    } 
    else {  // old IE
      var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    }
    
    // 추출한 파일명 삽입
    $(this).siblings('.upload-name').val(filename);
  });
}); 
