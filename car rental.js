function bookCar(carName, pricePerDay) {
    const startDate = prompt("Enter start date (YYYY-MM-DD):");
    const endDate = prompt("Enter end date (YYYY-MM-DD):");

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = end - start;
        const days = timeDiff / (1000 * 3600 * 24);

        if (days > 0) {
            const totalCost = days * pricePerDay;
            alert(`You have booked a ${carName} from ${startDate} to ${endDate}.\nTotal cost: ${totalCost}`);
        } else {
            alert("End date must be after start date!");
        }
    } else {
        alert("Booking canceled.");
    }
}
