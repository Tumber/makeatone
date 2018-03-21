<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="icon" href="http://makeatone.com/icon/favicon.ico" type="image/x-icon">
	
	<title>Управляй тональностью</title>
</head>
<body>	

	<header>
		<a class="logo">Make-A-Tone</a>
		<span class="instruction">Make-A-Tone создан для изменения тональности песни. Просто вставьте текст и выставите на какое количество тонов необходимо повысить тональность</span>
	</header>

	<div class="left-col">
		<button onclick="changeСhords()" >Нaйти аккорды</button>
		<div class="transport-coun">
			<button onclick="transIntDown()"><</button>
			<input id="numb-transport" class="trasport-inp" type="number" max="12" min="-12" value="0">
			<button onclick="transIntUp()">></button>
		</div>
		<button onclick="pastExample()" >Вставить пример</button>
		<span class="ton-span">Тональность песни:</span><span id="past-ton-chords" class="ton-span-chord"></span>	
		<textarea id="chordstext" class="chordstext"></textarea>
	</div>

	<div class="right-col">
		<button onclick="copyChords()" >Скопировать аккорды</button>
		<span class="ton-span">Тональность песни:</span><span id="Npast-ton-chords" class="ton-span-chord"></span>
		<div class="new-chords-box">
			<pre id="new-chordstext" >
			</pre>
		</div>
	</div>

<script type="text/javascript" src="js/main.js"></script>
</body>
</html>