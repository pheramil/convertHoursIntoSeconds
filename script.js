const button = document.getElementById('button');
button.addEventListener('click', convertHoursToSeconds);

function convertHoursToSeconds() {
    const input = Number(document.getElementById('textInput').value);
    let result = input * 3600; 

    document.getElementById('prompt').textContent = `${input} hours is ${result} seconds.`;
}