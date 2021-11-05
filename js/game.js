
function passInput() {
    let passwordData = document.getElementById('userInput').value;
    console.log(passwordData);
    let strength = 0;

    if (passwordData.length >= 8)
        strength += 1;
    if (passwordData.match(/(?=.*[0-9])/))
        strength += 1;
    if (passwordData.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
        strength += 1;
    if (passwordData.match(/(?=.*[a-z])/))
        strength += 1;
    if (passwordData.match(/(?=.*[A-Z])/))
        strength += 1;

    console.log(strength);

    switch (strength) {
        case 1:
            console.log("strength is " + strength + " and switch is working!")
            // window.location.replace("index.html");
            document.getElementById('message').innerHTML = 'Bad Password!';
            document.getElementById('bg').style.background = '#fa5555';
            break;

        case 2:
            console.log("strength is " + strength + " and switch is working!")
            document.getElementById('message').innerHTML = 'Not Bad!';
            document.getElementById('bg').style.background = '#ffa352';
            break;

        case 3:
            console.log("strength is " + strength + " and switch is working!")
            document.getElementById('message').innerHTML = 'Try Harder!';
            document.getElementById('bg').style.background = '#75b1ff';
            break;

        case 4:
            console.log("strength is " + strength + " and switch is working!")
            document.getElementById('message').innerHTML = 'Almost There!';
            document.getElementById('bg').style.background = '#c2f772';
            break;

        case 5:
            console.log("strength is " + strength + " and switch is working!")
            document.getElementById('message').innerHTML = 'Perfect Password!';
            document.getElementById('bg').style.background = '#41e079';
            break;

        default:
            console.log("strength is N/A and switch is working!")
    }
}