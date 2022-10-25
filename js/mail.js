const sendEmail = () => {
    console.log('enviar mensaje');
    Email.send({
        Host : "smtp.gmail.com",
        Username : "enriqueekizz@gmail.com",
        Password : "-----------",
        To : 'carlosecolqueticona@gmail.com',
        From : document.getElementById('txtEmail').value,
        Subject : document.getElementById('txtAsunto').value,
        Body : document.getElementById('txtMensaje').value
    }).then(
      message => alert(message)
    );
}