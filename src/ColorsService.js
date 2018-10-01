class ColorsService {
    async getRandomColor(number) {
        return await fetch('http://www.colr.org/json/colors/random/' + (number || 1))
            .then(resp => resp.json())
            .then(json => {
                let colors = json.colors.map(x => x.hex);
                console.log(colors);
                return colors;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default ColorsService