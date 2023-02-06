<template>
    <table>
        <thead>
            <tr>
                <th>Price Group</th>
                <th>Age</th>
                <th>Price Month</th>
                <th>Excess</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="endpoint in endpoints" :key="endpoint.id">
                <td>{{ endpoint.price_group }}</td>
                <td>{{ endpoint.age }}</td>
                <td>{{ endpoint.price_month }}</td>
                <td>{{ endpoint.excess }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            endpoints: []
        };
    },
    mounted() {
        this.fetchEndpoints();
    },
    methods: {
        async fetchEndpoints() {
            try {
                const READER_API = import.meta.env.VITE_APP_READER_API
                const INSURANCE_PRICES_URL = import.meta.env.VITE_APP_INSURANCE_PRICES_URL
                const response = await fetch(INSURANCE_PRICES_URL, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${READER_API}`
                    }
                });
                const data = await response.json();
                this.endpoints = data.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
