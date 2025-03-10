function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;

    if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - birthDateObj.getFullYear();
        let months = currentDate.getMonth() - birthDateObj.getMonth();
        let days = currentDate.getDate() - birthDateObj.getDate();

        // Adjust for negative values (e.g., if the birth month hasn't been reached this year)
        if (months < 0) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Get last month's days
        }

        const result = document.getElementById('age-result');
        result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    } else {
        alert('Please enter a valid birthdate!');
    }
}
