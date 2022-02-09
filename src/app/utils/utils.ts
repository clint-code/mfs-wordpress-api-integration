export default class Utils{

    static formatDateString(value: string) {

        const formattedValue = new Date(value);

        const dateValue = formattedValue.toLocaleDateString() + " " + formattedValue.toLocaleTimeString();

        return dateValue;

    }

    static formatNumber(num:number) {

        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    }


    static selectValidator(pattern:string){

        switch (pattern) {

            case 'document':

                return /(\.pdf)$/i;

                break;

            case 'image':

                return /(\.jpg|\.jpeg|\.png|\.gif)$/i;

                break;

            case 'multimedia':

                return /(\.jpg|\.jpeg|\.png|\.gif|\.pdf|)$/i;

                break;

            case 'video':

                return /(\.mp4|\.mov|\.wav|\.gif)$/i;

                break;

            case 'audio':

                return /(\.mp4|\.mp3|\.m4a|\.aa)$/i;

                break;

            default:

                return /(\.pdf)$/i;

                break;
        }

    }

    static clearLocalStorage(){

        localStorage.removeItem("policyData");
        localStorage.removeItem("coverstep");
        localStorage.removeItem("vehicleDetails");
        localStorage.removeItem("selectedPolicy");
        localStorage.removeItem("customerVerified");
        localStorage.removeItem("benefitsTotal");
        localStorage.removeItem("policyTaxes");
        localStorage.removeItem("paymentRef");
        localStorage.removeItem("totalTaxes");

    }
}
