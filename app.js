
const googleKey = "AIzaSyAJ89UB3RwHCuAc88jlGSMfT_Qkth50HUU";



	let btnGetData = document.getElementById('btnGetData');
	let resultArea = document.getElementById('result');
	let textAddress = document.getElementById('address');

	btnGetData.onclick = function(){
		let address = textAddress.value;
		var url =
		"https://www.googleapis.com/civicinfo/v2/representatives?key="  + googleKey + "&address=" + address

		console.log(url);

	fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {
			console.log(data);
			let out = "";
			for(var x =0; x <
			data.offices.length; x++) {
				out += "<strong>"
				+data.offices[x].name;
			out += ":</strong> " +
			data.officials[data.offices[x].officialIndices[0]].name + " - " + data.officials[x].party + "<br><br>";
		}

		resultArea.innerHTML = out;
	})
}