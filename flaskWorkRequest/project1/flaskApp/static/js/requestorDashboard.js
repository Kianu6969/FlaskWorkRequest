// ==== FOR THE PROGRESS BAR
var element = document.querySelectorAll('.approved');
var elementOngoing = document.querySelectorAll('.ongoing')
var elementFinished = document.querySelectorAll('.finished')

var progress_bar = document.querySelectorAll('.progress-bar');


// this will load automatocally when the page refreshes or loads
function progress(){
	for (var i = 0; i < progress_bar.length; i++){
		var percent = element[i];
		var ongoing = elementOngoing[i];
		var finised = elementFinished[i];
		
		if (percent.value == 50 || percent.value == 90){
			ongoing.style.background = '#87C0CD';
			ongoing.style.color = '#F3F9FB';
			ongoing.innerText = 'check';
			progress_bar[i].style.width = percent.value+'%';

			if(percent.value == 90){
				finised.style.background = '#87C0CD';
				finised.innerText = 'check';
				finised.style.color = '#F3F9FB';
			}
		}
		
		console.log(ongoing.style.background);
		console.log('innerText: ', percent.value);
	}
}