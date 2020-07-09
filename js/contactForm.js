const form = document.getElementById('cu-form')
const form2 = $('form#cu-form')

const handleSubmit = (e) => {
    e.preventDefault()

    let interests = ''
    const interestsElements = form.getElementsByClassName('interest-chkbox')
    for (var i = 0; interestsElements[i]; ++i) {
        if (interestsElements[i].checked) interests += interestsElements[i].value + ','
    }
    
    let formData = new FormData()
    formData.append('entry.1985184073', interests)
    formData.append('entry.704152083', form.querySelector('#name').value)
    formData.append('entry.1962499889', form.querySelector('#emailadd').value)
    formData.append('entry.2010145217', form.querySelector('#country').value)
    formData.append('entry.1775142135', form.querySelector('#desc').value)
      
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdZwzKpuDg3tA0U89BwnQVWq2E5gbXAbl8IxfhjLC08jXY3Ag/formResponse?", {
        method: "POST",
        body: formData,
        mode:"no-cors",
    }).then(res => {
        // console.log("Request complete! response:", res);
        window.location.replace("../index.html");
    }).catch(e => console.log(e))
    // window.location.replace("http://www.w3schools.com");
}

form.addEventListener('submit', handleSubmit)