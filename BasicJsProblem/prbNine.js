function findAddress(obj) {

    if (typeof obj !== "object") {
        return "Not Found ";
        } else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + "," + house + "," + society;
        }
}
console.log(findAddress(
    {street:10,
    house:'15A',
    society:"Earth Perfect"}));