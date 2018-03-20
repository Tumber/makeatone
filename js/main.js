var chords = ['Cm', 'C#m', 'Dm', 'D#m', 'Em',
			  'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Hm',
			  'C', 'C#', 'D', 'D#', 'E',
			  'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];

		function copyChords(){
			var newText = document.getElementById('new-chordstext');
			var range = document.createRange();
			range.selectNode(newText);
			window.getSelection().addRange(range); 
			document.execCommand('copy'); 
			window.getSelection().removeAllRanges();
		}

		
		function changeСhords() {
			
			var text = document.getElementById("chordstext");
			var newText = document.getElementById('new-chordstext');
			var transportNumb = +document.getElementById('numb-transport').value;
			var ntoneSong = document.getElementById('Npast-ton-chords');
			var toneSong = document.getElementById('past-ton-chords');

			var transport, nextTextPoint = 0, preTextPoint = 0;
			var checkChord = 0;
			var songTonTrig = true;
			var verse_checkChord;

			var newTextCont = '';
			var textStr = ' ' + text.value;
			var sungText = '';
			var u = 8;
	
			newText.innerHTML = '';

			/* 
			newTextCont += takeSongTon(); 

			textStr[checkChord + arr[i].length]
			*/

			for (var z = 0; u > 6; z++) {
				newTextCont += takeNewChord(chords) + sungText;
			}

			newText.innerHTML = newTextCont;

			function takeNewChord(arr){
				var lastChord = textStr.length;
				var newChord = '';
				var lastChordLength;

				for (var i = 0; i < 24; i++){

					checkChord = textStr.indexOf(arr[i], preTextPoint);

					if (checkChord <= 0){
						continue;
					
					} else if (checkChord <= lastChord ){

						if (textStr[checkChord + arr[i].length] == ' ' || textStr[checkChord + arr[i].length] == '\n' ) {

							lastChord = checkChord;

							nextTextPoint = lastChord;


							transport = i + transportNumb;
							if (12 <= i <= 23 && transport < 12) {
								transport = transport + 12;
							}
							if (i < 12 && transport < 0) {
								transport = transport + 12;
							}
							if (transport >= 23) {
								transport = transport - 12;
							}
							if (i <= 11 && transport >= 12) {
								transport = transport - 12;
							}

							if(songTonTrig == true){
							toneSong.innerHTML =  arr[i];
							ntoneSong.innerHTML = arr[transport];
							}
							
							newChord = `<span class="chords"> ${arr[transport]} </span>`

							lastChordLength = arr[i].length;
						} else {

							continue;
						}
					}
				}	

				function findNextChord(){
					var FpreTextPoint;
					var FlastChord = textStr.length;
					var FcheckChord;

					for (var i = 0; i < 24; i++){

					FcheckChord = textStr.indexOf(chords[i], nextTextPoint + 1);

					if (FcheckChord <= 0){
						continue;
					
					} else if (FcheckChord <= FlastChord ){

						if (textStr[FcheckChord + chords[i].length] == ' ' || textStr[FcheckChord + chords[i].length] == '\n' ) {

							FlastChord = FcheckChord;

							FpreTextPoint = FcheckChord;

						} else {

							continue;
						}
					}
				}

				return FpreTextPoint;
			}

				sungText = textStr.substring( nextTextPoint + lastChordLength, findNextChord());

				preTextPoint = nextTextPoint + 1;

				if (verse_checkChord == findNextChord()) {
					u = 0;
				}

				songTonTrig = false;
				return newChord;
			}

			function takelastVerse(){

				var lastVerse = '', verse_lastChord = 1;

				for (var i = 0; i <= 24; i++){	

				verse_checkChord = textStr.lastIndexOf(chords[i]);

					if (verse_checkChord !== -1 ){
						
						if (verse_checkChord > verse_lastChord) {

							verse_lastChord = verse_checkChord;

						}
					}
				}

				lastVerse = textStr.substring(verse_lastChord, textStr.length);

				return lastVerse;
			}

		}	
		