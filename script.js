function register(lang) {
    show();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let sex = male.checked || female.checked ? male.checked ? "male" : "female" : "";
    let ground = document.getElementById("ground").value
    let block = document.getElementById("block").value
    let room = document.getElementById("room").value
    let dorm = "G + " + ground + " " + block + " block room " + room;
    let department = document.getElementById("department").value
    let amir = sex == 'male' ? 'muzayyanabdurhaman@gmail.com' : 'rahmush64@gmail.com';
    let notfy = document.getElementById('notification');
    if (name == "")
        notfy.innerHTML = lang == 'amharic' ? "እባክዎ ስምዎን ያስገቡ።":"Maloo maqaa keessan galchaa.";
    else if (phone == '')
        notfy.innerHTML = lang == 'amharic' ? 'እባክዎ ስልክ ቁጥርዎን ያስገቡ።':"Maloo lakkoofsa bilbilaa  keessan galchaa. ";
    else if (sex == '')
        notfy.innerHTML = lang == 'amharic' ?  'እባክዎ ፆታዎን ይምረጡ።':"Maloo saala keessan filadhaa.";
    else if (ground == '' || block == '' || room == '')
        notfy.innerHTML = lang == 'amharic' ?  'እባክዎ ዶርምዎን ያስገቡ።':"Maloo doormii keessan galchaa. ";
    else if (department == '')
        notfy.innerHTML = lang == 'amharic' ?  'እባክዎ ዲፓርትመንትዎን ይምረጡ።':"Maloo dippaartmantii keessan filadhaa. ";
    else {
        notfy.innerHTML = lang == 'amharic' ?  "<p class='text-success'>ለማረጋገጥ ደግመው ይጫኑ።</p>":"<p class='text-success'>Mirkaneessuuf irra deebi'aa tuqaa</p>";
        let text = lang == 'amharic' ? `ስም ፡ ${name} ስልክ ቁጥር ፡ ${phone} ዶርም ፡ ${dorm} ዲፓርትመንት ፡ ${department}`:`Maqaa ፡ ${name} lakkoofsa bilbilaa ፡ ${phone} Doormii ፡ ${dorm} Dippaartmanti ፡ ${department}`;
        text.replace(" ","%20");
        document.getElementById('register').innerHTML = lang == 'amharic' ? `<a href="mailto:${amir}?body=${text}">ይላኩ</a>`:`<a href="mailto:${amir}?body=${text}">Ergaa</a>`;
    }
}


function show() {
    document.getElementById('notification').classList.add('show');
    setTimeout(() => {
        document.getElementById('notification').classList.remove('show');
    }, 2500);
}
let i = 0;

function exam() {

    let score = 0;
    const exams = [
        ['ስንት ሰላት አለ', '1', '3', '4', '5', '5'],
        ['ስንት ሰላት አለ', '1', '3', '4', '5', '5'],
        ['ስንት ሰላት አለ', '1', '3', '4', '5', '5'],
        ['ስንት ሰላት አለ', '1', '3', '4', '5', '5'],
        ['ስንት ሰላት አለ', '1', '3', '4', '5', '5']
    ];
    document.getElementById('question').innerHTML = `ጥያቄ ቁጥር ${i+1} . ${exams[i][0]}<br>
        <input type='radio' name='choice${i}' id='a' value='a'><label for='a'>${exams[i][1]}</label><br>
        <input type='radio' name='choice${i}' id='b' value='b'><label for='b'>${exams[i][2]}</label><br>
        <input type='radio' name='choice${i}' id='c' value='c'><label for='c'>${exams[i][3]}</label><br>
        <input type='radio' name='choice${i}' id='d' value='d'><label for='d'>${exams[i][4]}</label><br>
        <button onclick=next()>Next</button>
        `;
    setInterval(choice, 100);
}

function next() {
    i++;
    exam();
}

function choice() {
    document.getElementById('a').innerHTML = answer;

}