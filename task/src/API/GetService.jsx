import axios from 'axios'

export default class GetService {
    static async getAll() {
        try {
            const response = await axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
            console.log(response);
            return response.data;
        }
        catch (e) {

            console.log(e);
        }
    }
}