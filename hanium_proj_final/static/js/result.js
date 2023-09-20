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




var grammarButton = document.getElementById('grammar_button');
var grammarDiv = document.getElementById('grammar_compare');
var resultFooter = document.getElementById('result_footer');

function clickGrammarButton() {
	
	/* 맞춤법 확인 버튼을 누른 경우 */
	if (grammarDiv.style.display == 'none') {
		grammarDiv.style.visibility ='visible';
		grammarDiv.style.display = 'block';
		grammarButton.innerText = '▲ 맞춤법 비교 종료하기';
		
		resultFooter.style.display = 'inline-block';
		resultFooter.style.position = 'relative';
		resultFooter.style.top = '0px';
	}
	
	/* 맞춤법 확인을 종료하는 경우 */
	else {
		grammarDiv.style.visibility ='hidden';
		grammarDiv.style.display = 'none';
		grammarButton.innerText = '▼ 맞춤법 비교 확인하기';
		
		resultFooter.style.display = 'block';
		resultFooter.style.position = 'absolute';
		resultFooter.style.top = '770px';
	}
}


/*
function saveAudio() {
	// Replace 'audio_file_url' with the actual URL of the audio file
	var audio_file_path = "{{ audio_file_path }}"
	const audioFileURL = console.log{audio_file_path};

	// Create a temporary anchor element to trigger the download
	const a = document.createElement('a');
	a.href = audioFileURL;
	a.download = '번역결과audio.mp3';
	a.click();
}
*/

const pdfForm = document.getElementById('pdfForm');
pdfForm.addEventListener('submit', function (event) {
	event.preventDefault();
	savePdf();
});

const audioForm = document.getElementById('audioForm');
audioForm.addEventListener('submit', function (event) {
	event.preventDefault();
	saveAudio();
});

document.getElementById('compareform').onsubmit = function () {
	const input_text = '{{ text_input }}';
	const result = '{{ result }}';

	const url = '/compare?text_input=' + encodeURIComponent(input_text) + '&result=' + encodeURIComponent(result);


	window.location.href = url;

	return false; 
};