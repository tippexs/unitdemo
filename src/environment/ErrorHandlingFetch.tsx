export class ErrorHandlingFetch {
    private location: Location
    private apiHost: String = ""

    constructor(location: Location) {
        this.location = location;
        this.init()
    }

    /*
    * Init App Environment based on Unit served configuration Files
    *
    * */
    public init() {
        fetch("/environments/").then((response) => {
            response.json().then((json) => {
                this.apiHost = json.weatherApi.hostname
            })
            if (response.ok) {
                console.log(Date.now())
            } else {
                console.error("Failed to load Application Environment")
            }
        }).catch((reason) => {
                console.error("Failed to load Application Environment")
            }
        );
    }

    public async fetch(input: string, init?: RequestInit): Promise<Response> {
        const response = await fetch(`${this.apiHost}${input}`, init);

        if (response.status === 501) {
            return new Response('["Not Implemented. Deploy the API on Unit to see this Feature."]')
        }

        if (response.status === 401) {
            this.location.assign(`${this.apiHost}/users/login`);
            return response;
        }

        return response
    }
}