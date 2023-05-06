const copyEmail = () => {
    const email = "junmate12@gmail.com"
    const textArea = document.createElement("textarea")

    textArea.value = email
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
    
}