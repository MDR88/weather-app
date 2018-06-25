let zipCode = 0

const checkZipFunc = () => {
    zipCode = $("#zipInput").val()
    console.log(zipCode)
    parseInt(zipCode)
    if (zipCode.toString().length < 5 || zipCode.toString().length > 5) {
        alert("Please enter a valid 5-digit zip code")
        return false
    }

    else {
        return zipCode
    }
}
module.exports = checkZipFunc