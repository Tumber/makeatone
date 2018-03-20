<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Управляй тональностью</title>
</head>
<body>	

	<header>
		<a class="logo">Make-A-Tone</a>
	</header>

	<div class="left-col">
		<button onclick="changeСhords()" class="enter-button">Нaйти аккорды</button>
		<input id="numb-transport" class="trasport-inp" type="number" max="12" min="-12" value="0">
		<span class="ton-span">Тональность песни:</span><span id="past-ton-chords" class="ton-span-chord"></span>		
		<textarea id="chordstext" class="chordstext"></textarea>
	</div>

	<div class="right-col">
		<button onclick="copyChords()" class="enter-button">Скопировать аккорды</button>
		<span class="ton-span">Тональность песни:</span><span id="Npast-ton-chords" class="ton-span-chord"></span>
		<div class="new-chords-box">
			<pre id="new-chordstext" >
			</pre>
		</div>
	</div>
	
		

<script type="text/javascript" src="js/main.js"></script>
</body>
</html>