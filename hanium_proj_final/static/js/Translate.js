$(document).ready(function() {
  // 페이지가 로드될 때 선택된 라디오 버튼에 selected 클래스를 추가
  $('.custom-button input[type="radio"]:checked').parent().addClass('selected');

  // 라디오 버튼 클릭 이벤트 처리
  $('.custom-button input[type="radio"]').on('click', function() {
    // 같은 그룹 내의 선택되지 않은 다른 라디오 버튼의 selected 클래스 제거
    const group = $(this).attr('name');
    $('.custom-button input[type="radio"][name="' + group + '"]').not(this).parent().removeClass('selected');

    // 선택된 버튼의 부모 요소에 selected 클래스 추가
    $(this).parent().addClass('selected');
  });
});

/*로딩 완료시 로딩 화면 숨기기*/
$(document).ready(function() { 
	$('#loading').hide();

	/*로딩화면 띄우기*/
	$('#target').submit(function(){
	$('#loading').show();
	 return true; });
});